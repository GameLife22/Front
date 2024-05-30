import {Component, effect, inject, OnChanges, signal} from '@angular/core';
import { Router } from '@angular/router';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.scss']
})
export class RechercherProduitComponent implements OnChanges {
  router = inject(Router);
  produitService = inject(ProduitService);
  produits: ProduitModel[] = [];
  terme = signal<string>('');

  ngOnChanges(): void {
    effect(() => {
      const terme = this.terme();
      if (terme.length >= 3) {
        this.produitService.rechercherProduitsContenantNom(terme);
      }
    });
  }

  verifierProduitNonVide(): boolean {
    return this.produits && this.produits.length > 0;
  }

  rechercherProduits(terme: string) {
    if (terme.length >= 3) {
      this.produitService.rechercherProduitsContenantNom(terme).subscribe({
        next: (produits) => {
          this.produits = produits;
        }
      });
    } else {
      this.produits = [];
    }
  }

  redirigerVersFicheProduit(idProduit: string) {
    const lien = ['/produit', idProduit];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(lien)
    );
    this.terme.set('');
  }

  viderInput() {
    this.terme.set('');
  }

  gererRechercheInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.terme.set(input.value);
  }
}
