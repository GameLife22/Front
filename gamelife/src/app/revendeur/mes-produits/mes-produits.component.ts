import { Component, OnInit } from '@angular/core';
import {MesProduitsService} from "../service/mes-produits/mes-produits.service";
import {ModifProduitRevendeurModel} from "../model/modif.produitRevendeur.model";
import {AddToRevendeurDialogComponent} from "../add-to-revendeur-dialog/add-to-revendeur-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent implements OnInit {

  produitsRevendeur: any[];
  nbrProduits: number = 0;
  p: number = 1;

  constructor(public mesProduitsService: MesProduitsService,
              public dialog: MatDialog,
              public tokenService: TokenService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.mesProduitsService.getAllProduitDuRevendeur().subscribe({
      next: (result) => {
        this.produitsRevendeur = result;
        this.nbrProduits = this.produitsRevendeur.length;
      },
      error: (e) => {
        console.error(e);
      }
    });
  }



  public modifierProduit(id: string, produitRevendeur: ModifProduitRevendeurModel): void {
    const dialogRef = this.dialog.open(AddToRevendeurDialogComponent, {
      width: '250px',
      //data: { produitRevendeur }
    });
    dialogRef.afterClosed().subscribe((result: { stockSize: any; price: any; }) => {
      if (result) {
       let  produitRevendeurs: ModifProduitRevendeurModel = { stock: result.stockSize, prix: result.price};
        this.mesProduitsService.modifierProduit(id, produitRevendeurs).subscribe({
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
  public supprimerProduit(id: string): void {
    this.mesProduitsService.supprimerProduit(id).subscribe({
      next: (result) => {
        console.log(result);
        this.ngOnInit();
      },
      error: (e) => {
        console.error(e);
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
