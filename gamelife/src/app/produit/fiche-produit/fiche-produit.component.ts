import { coerceNumberProperty } from '@angular/cdk/coercion';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitModel } from 'src/app/model/produit.model';
import { ErrorHandlerService } from 'src/app/partage/services/error-handler.service';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
})
export class FicheProduitComponent implements OnInit {
  errorMessage: string = '';

  id : string | any
  game : ProduitModel | any
  picture : string

  constructor(private activatedRoute : ActivatedRoute, private productService : ProduitService, private errorHandler : ErrorHandlerService) { }

  /**
   * Cette méthode permet au chargement du composant de récupérer
   * l'identifiant unique du jeu vidéo (fiche produit) via l'url, 
   * et fait un appel sur une méthode pour récupérer un jeu vidéo 
   * @author: Fabien
   */
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id)
    .subscribe({
      next: (result) => {
        this.game = result;
        this.picture = this.game.images[0].image;
      },
      error: (e : HttpErrorResponse) => {
        this.errorHandler.handleError(e);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    });
  }
}
