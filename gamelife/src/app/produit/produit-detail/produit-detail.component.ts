import { Component, OnInit } from '@angular/core';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  produits?: ProduitModel[];

  constructor(private produitService: ProduitService) { }

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


