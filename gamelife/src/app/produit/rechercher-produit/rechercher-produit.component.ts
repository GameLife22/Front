import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { ProduitModel } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.scss']
})
export class RechercherProduitComponent implements OnInit {

  searchTerms = new Subject<string>();
  products: Observable<ProduitModel | any>

  constructor(private router: Router, private searchService: ProduitService) { }

  ngOnInit(): void {
    this.products = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => (term.length == 0) ? ([]) : this.searchService.getProductsByName(term))
    );
  }

  public search(term: string) {
    this.searchTerms.next(term);
  }

  public goToDetail(produit: ProduitModel) {
    const link = ['/produit', produit.id]
    this.router.navigate(link);
  }
}
