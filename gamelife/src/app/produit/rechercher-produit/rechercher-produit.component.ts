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

  /**
   * Cette méthode permet au chargement du composant de récupérer
   * les entrées effectuée sur la barre de recherche et
   * d'appeler la méthode pour gérer la recheche de produit
   * @author: Fabien
   */
  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control('')
    });
  }

  /**
   * Cette méthode permet de gérer la recherche de produit,
   * elle récupére le(s) jeu(x) vidéo(s) selon le terme recherché
   * @author: Fabien
   */

  handleSearchProducts() {
    let keyword = this.searchFormGroup.value.keyword;
    this.productService.getProductsByName(keyword).subscribe({
      next: (data) =>  {
        this.games = data
      },
      error: (message) => {

      }
    });
  }

  /**
   * Cette méthode permet de rediriger vers une fiche produit
   * @param product: un jeu vidéo
   * @author: Fabien
   */
  goToProductSheet(product : ProduitModel) {
    const link = ['/produit', product.id]
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate(link)
    )
  }

}
