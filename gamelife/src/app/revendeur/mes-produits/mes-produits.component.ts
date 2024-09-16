import { Component, OnInit } from '@angular/core';
import {MesProduitsService} from "../service/mes-produits/mes-produits.service";
import {ModifProduitRevendeurModel} from "../model/modif.produitRevendeur.model";
import {AddToRevendeurDialogComponent} from "../add-to-revendeur-dialog/add-to-revendeur-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";
import {GameModel} from "../../model/game.model";
import {ProduitRevendeurModel} from "../model/produitRevendeur.model";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent implements OnInit {

  produitsRevendeur: ProduitRevendeurModel[];
  filteredGames: ProduitRevendeurModel[]; // filtered games array
  searchTerm = ''; // search term
  nbrProduits: number = 0;
  p: number = 1;

  constructor(public mesProduitsService: MesProduitsService,
              public dialog: MatDialog,
              public tokenService: TokenService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.mesProduitsService.getAllProduitDuRevendeur().subscribe({
      next: (result) => {
        if(result == null){
          console.log("No products found for this user.");
        }
        else {
          this.produitsRevendeur = result;
          this.filterGames();
        }
      },
      error: (e) => {
        console.error(e);
      }
    });
  }


  filterGames() {
    this.filteredGames = this.produitsRevendeur/*.filter(game =>
      game.produit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );*/
    this.nbrProduits = this.filteredGames.length;
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
            this.ngOnInit();
          },
          error: (e) => {
            console.error(e);
          }
        });
      }
    });

}

  public supprimerProduitDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('Product deletion confirmed.')
        this.mesProduitsService.supprimerProduit(id).subscribe({
          next: (result): void => {
            console.log('Product deleted successfully.');
            this.fetchData();
          },
          error: (e) => {
            console.error('Error deleting product:', e);
          }
        });
      }
    });
  }
  public supprimerProduit(id: string): void {
    this.mesProduitsService.supprimerProduit(id).subscribe({
      next: (result): void => {
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
