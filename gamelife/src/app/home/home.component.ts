import { Component, inject, signal, WritableSignal } from '@angular/core';
import { GameModel } from 'src/app/model/game.model';
import { Router } from "@angular/router";
import { PageModel } from "../model/page.model";
import {GameService} from "../services/game/game.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  router = inject(Router);
  gameService: GameService = inject(GameService);
  games: WritableSignal<PageModel<GameModel>> = signal<PageModel<GameModel>>({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 0 });
  page: WritableSignal<number> = signal<number>(0);
  size: number = 20; // number of elements in a page

  constructor() {
    this.getGames(this.page(), this.size);
  }

  getGames(page: number, size: number): void {
    this.gameService.getGames(page, size)
      .subscribe({
        next: (games) => {
          this.games.set(games);
          console.log(this.games())
        }
      });
  }

  getPage(page: number) {
    if(page > 0) {
      this.page.set(page - 1);
      this.getGames(this.page(), this.size);
    }
  }

  redirectToGameSheet(gameId: string) {
    const lien = ['/produit', gameId];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(lien)
    );
  }
}
