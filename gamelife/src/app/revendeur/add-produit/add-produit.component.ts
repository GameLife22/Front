import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";

import {CategorieModel} from "../../model/categorie.model";

import {FormBuilder, Validators} from "@angular/forms";
import {GameGenres} from "../enum/game-genres.enum";
import {Platforms} from "../enum/platforms.enum";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.scss'
})
export class AddProduitComponent {

  addProduitForm: any;
  genres = Object.values(GameGenres);
  platforms = Object.values(Platforms);
  fileName = 'No file selected';


  constructor(public tokenService: TokenService,
              public router: Router,
              private formBuilder: FormBuilder) {

    this.addProduitForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required] ,
      genre: [[], Validators.required],
      platforms: [[], Validators.required] // Add this line

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



  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.fileName = files[0].name;
      // Assuming you have a method or property to handle the file for submission
      // this.selectedFile = files[0];
    }
  }
}
