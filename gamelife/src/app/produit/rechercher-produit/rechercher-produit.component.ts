import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.scss']
})
export class RechercherProduitComponent implements OnInit {

  games: ProduitModel[] | any;
  searchFormGroup!: FormGroup;

  constructor(private router: Router, private productService: ProduitService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control('')
    });

    this.searchFormGroup.get('keyword')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(keyword => {
      if (keyword.trim() !== '') {
        this.handleSearchProducts();
      } else {
        this.games = null;
      }
    });
  }

  handleSearchProducts() {
    let keyword = this.searchFormGroup.value.keyword;
    this.productService.getProductsByName(keyword).subscribe({
      next: (data) => {
        this.games = data;
      },
      error: (message) => {
        // Gérer les erreurs
      }
    });
  }

  goToProductSheet(product: ProduitModel) {
    const link = ['/produit', product.id];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(link)
    );
  }

  onInputChange() {
    // Réinitialiser les jeux lorsque le champ est vidé
    if (this.searchFormGroup.value.keyword.trim() === '') {
      this.games = null;
    }
  }
}
