import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/app/model/produit';
import { ProduitServiceService } from 'src/app/services/produit/produit-service.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  produits?: produit[];

  constructor(private produitService: ProduitServiceService) { }

  ngOnInit(): void {
    this.showAllProduitDetail();
  }

  showAllProduitDetail(): void {
    this.produitService.getAllProduit()
      .subscribe({
        next: (res) => {
          console.log(res, "res");
          this.produits = res;
        },
        error: (e) => console.error(e, "error ici")
      });
  }
}


