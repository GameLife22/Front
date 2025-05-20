import { Component, OnInit } from '@angular/core';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produits: ProduitModel[] | any ;

  constructor(private produitService: ProduitService, private router : Router) { }

  ngOnInit(): void {
    this.showAllProduitDetail();
  }

  showAllProduitDetail(): void {
    this.produitService.getAllProduit()
      .subscribe({
        next: (res) => {
          if (res) {
            console.log(res, "res");
            this.produits = res;
          } else {
            console.warn("Received null or undefined response from getAllProduit");
          }
        },
        error: (e) => console.error(e, "error getAllProduit")
      });
  }

  /**
   *  Cette méthode permet de rediriger vers une fiche produit
   *  @param id: un identifiant unique d'un produit
   *  @autor: Hippolyte
   * **/
  productDetail(id:number) {
    const link = ['/produit', id];
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
        this.router.navigate(link)
    );
  }

}
