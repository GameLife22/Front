import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
})
export class FicheProduitComponent implements OnInit {

  id : string | any
  game : ProduitModel | any
  picture : string

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private productService : ProduitService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getProductById(this.id)
    .subscribe({
      next: (result) => {
        this.game = result;
        this.picture = this.game.images[0].image;
      }
    });
  }
}
