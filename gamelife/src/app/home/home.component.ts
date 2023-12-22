import { Component, OnInit } from '@angular/core';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produits: ProduitModel[] | any ;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.showAllProduitDetail();
  }

  showAllProduitDetail(): void {
    this.produitService.getAllProduit()
      .subscribe({
        next: (res) => {
          this.produits = res;
          console.log(this.produits, "this.produit");
        },
        error: (e) => console.error(e, "error ici")
      });
  }

  

}
