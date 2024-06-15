import {Component, effect, inject, OnChanges, signal} from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from 'src/app/model/game.model';
import {GameService} from "../../services/game/game.service";
import {SearchGameModel} from "../../model/searchGame.model";

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
      if (term.length >= 3) {
        this.gameService.getGameByName(term);
      }
    });
  }

  checkGameNotEmpty(): boolean {
    return this.games && this.games.length > 0;
  }

  searchGames(term: string) {
    if (term.length >= 3) {
      this.gameService.getGameByName(term).subscribe({
        next: (games) => {
          this.games = games;
          console.log(this.games)
        }
      });
    } else {
      this.games = [];
    }
  }

  redirectToGameSheet(id: string) {
    const lien = ['/produit', id];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(lien)
    );
    this.term.set('');
  }

  viderInput() {
    this.term.set('');
  }

  gererRechercheInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.term.set(input.value);
  }
}
