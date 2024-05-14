import { Component, OnInit } from '@angular/core';
import {TousProduitsService} from "../service/tous-produits/tous-produits.service";
import {AddToRevendeurDialogComponent} from "../add-to-revendeur-dialog/add-to-revendeur-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tous-produits',
  templateUrl: './tous-produits.component.html',
  styleUrls: ['./tous-produits.component.scss']
})
export class TousProduitsComponent implements OnInit {

  produits : any[];

  constructor( private tousProduitsService : TousProduitsService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.tousProduitsService.getAllProduit().subscribe({
      next: (result) => {
        this.produits = result;
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
          },
          error: (e) => {
            console.error(e);
          }
        });
      }
    });
  }

}
