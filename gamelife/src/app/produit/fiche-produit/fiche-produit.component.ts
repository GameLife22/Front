import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModel } from 'src/app/model/game.model';
import { GameService } from "../../services/game/game.service";

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
})
export class FicheProduitComponent implements OnInit {

  id : string | any;
  game : GameModel;

  constructor(private activatedRoute : ActivatedRoute, private gameService : GameService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.gameService.getGamesById(this.id)
    .subscribe({
      next: (game) => {
        this.game = game;
      }
    });
  }
}
