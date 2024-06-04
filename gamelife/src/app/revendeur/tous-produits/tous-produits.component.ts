import {Component, OnInit} from '@angular/core';
import {TousProduitsService} from "../service/tous-produits/tous-produits.service";
import {AddToRevendeurDialogComponent} from "../add-to-revendeur-dialog/add-to-revendeur-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-tous-produits',
  templateUrl: './tous-produits.component.html',
  styleUrls: ['./tous-produits.component.scss']
})
export class TousProduitsComponent implements OnInit {

  produits: any[];
  nbrProduits: number = 0;
  p: number = 1;


  constructor( private tousProduitsService : TousProduitsService,
               public dialog: MatDialog,
               public tokenService : TokenService,
               private router: Router
               ) { }

  ngOnInit(): void {
    this.tousProduitsService.getAllProduit().subscribe({
      next: (result) => {
        this.produits = result;
        this.nbrProduits = this.produits.length;
        console.log(this.produits);
      },
      error: (e) => {
        console.error(e);
      }
    });
  }



  public ajouterProduitAuRevendeur(produit: any): void {
    const dialogRef = this.dialog.open(AddToRevendeurDialogComponent, {
      width: '250px',
      data: { produit }
    });

    dialogRef.afterClosed().subscribe((result: { stockSize: any; price: any; }) => {
      if (result) {
        // result contains the stock size and the price
        this.tousProduitsService.ajouterProduitAuRevendeur(produit, result.stockSize, result.price).subscribe({
          next: (result) => {
            console.log(result);
            this.ngOnInit();
          },
          error: (e) => {
            console.error(e);
          }
        });
      }
    });
  }


  disconnect() {
    this.tokenService.clearToken();
    this.refreshPage()
  }

  refreshPage(): void {
    this.router.navigateByUrl('login').then(() => {
      location.reload();
    });
  }
}
