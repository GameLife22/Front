import {Component, OnInit} from '@angular/core';
import {TousProduitsService} from "../service/tous-produits/tous-produits.service";
import {AddToRevendeurDialogComponent} from "../add-to-revendeur-dialog/add-to-revendeur-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import {TokenService} from "../../services/token/token.service";
import {GameModel} from "../../model/game.model";

@Component({
  selector: 'app-tous-produits',
  templateUrl: './tous-produits.component.html',
  styleUrls: ['./tous-produits.component.scss']
})
export class TousProduitsComponent implements OnInit {

  produits: GameModel[];
  filteredGames: GameModel[]; // filtered games array
  searchTerm = ''; // search term
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
        this.filterGames();
      },
      error: (e) => {
        console.error(e);
      }
    });


  }

  filterGames() {
    this.filteredGames = this.produits.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.nbrProduits = this.filteredGames.length;
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
