import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";

import {CategorieModel} from "../../model/categorie.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.scss'
})
export class AddProduitComponent {
   categories: CategorieModel[];
  addProduitForm: any;

  constructor(public tokenService: TokenService,
              public router: Router,
              private formBuilder: FormBuilder) {

    this.addProduitForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {


  }

  disconnect() {
    this.tokenService.clearToken();
    this.refreshPage()
  }
  refreshPage(): void {
    this.router.navigateByUrl('login').then(() => {
      location.reload();
    });

  }

  onSubmit() {
    if (this.addProduitForm.valid) {
      const newProduct = this.addProduitForm.value;
      console.log(newProduct);
    }
  }
}
