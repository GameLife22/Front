import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from "@angular/router";
import { PageModel } from "../model/page.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  router = inject(Router);
  produitService: ProduitService = inject(ProduitService);
  produits: WritableSignal<PageModel<ProduitModel>> = signal<PageModel<ProduitModel>>({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 0 });
  page: WritableSignal<number> = signal<number>(0);
  produitsParPage: number = 15; // valeur fixe

  constructor() {
    this.recupererProduits(this.page(), this.produitsParPage);
  }

  recupererProduits(page: number, produitsParPage: number): void {
    this.produitService.recupererProduits(page, produitsParPage)
      .subscribe({
        next: (produits) => {
          this.produits.set(produits);
        }
      });
  }

  recupererPage(page: number) {
    if(page > 0) {
      this.page.set(page - 1);
      this.recupererProduits(this.page(), this.produitsParPage);
    }
  }

  redirigerVersFicheProduit(idProduit: string) {
    const lien = ['/produit', idProduit];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(lien)
    );
  }
}
