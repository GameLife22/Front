import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  games: ProduitModel[] | any;
  searchFormGroup!: FormGroup; 
  

  constructor(private router : Router, private productService : ProduitService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control(null)
    });
    this.handleSearchProducts();
  }

  public handleSearchProducts() {
    let keyword = this.searchFormGroup.value.keyword;
    this.productService.getProductsByName(keyword).pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe({
      next: (data) =>  {
        this.games = data
        console.log(this.games)
      }
    });
  }

  public goToProductSheet(product : ProduitModel) {
    const link = ['/produit', product.id]
    this.router.navigate(link);
  }

}
