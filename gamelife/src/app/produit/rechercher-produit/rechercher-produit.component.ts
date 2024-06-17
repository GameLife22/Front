import { Component, effect, inject, OnChanges, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from "../../services/game/game.service";
import { SearchGameModel } from "../../model/searchGame.model";

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.scss']
})
export class RechercherProduitComponent implements OnChanges {
  router = inject(Router);
  gameService = inject(GameService);
  games: SearchGameModel[] = [];
  term = signal<string>('');

  ngOnChanges(): void {
    effect(() => {
      const term = this.term();
      if (term && term.length >= 3) { // Vérifier que term est défini avant de vérifier sa longueur
        this.gameService.findByNameContainingIgnoreCase(term).subscribe({
          next: (games) => {
            this.games = games;
            console.log(this.games);
          }
        });
      } else {
        this.games = [];
      }
    });
  }

  checkGameNotEmpty(): boolean {
    return this.games && this.games.length > 0;
  }

  searchGames(term: string): void {
    if (term && term.length >= 3) {
      this.gameService.findByNameContainingIgnoreCase(term).subscribe({
        next: (games) => {
          this.games = games;
          console.log(this.games);
        }
      });
    } else {
      this.games = [];
    }
  }

  disableCard(): void {
    this.games = [];
  }

  redirectToGameSheet(id: string): void {
    const link = ['/produit', id];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(link)
    );
    this.term.set('');
  }

  handleSearchInput(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.term.set(input.value);
    }
  }
}
