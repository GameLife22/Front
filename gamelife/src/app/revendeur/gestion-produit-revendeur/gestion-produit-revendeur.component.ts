import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token/token.service";
import { Router} from "@angular/router";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";
import {UtilisateurModel} from "../../model/utilisateur.model";

@Component({
  selector: 'app-gestion-produit-revendeur',
  templateUrl: './gestion-produit-revendeur.component.html',
  styleUrls: ['./gestion-produit-revendeur.component.scss']
})
export class GestionProduitRevendeurComponent implements OnInit {


  constructor(public tokenService : TokenService ,
              public router : Router,
              public utilisateurService : UtilisateurService) { }
  storeId : any = this.tokenService.getUserIdFromToken();

  storeName : UtilisateurModel;


  ngOnInit(): void {
    this.utilisateurService.getUserById(this.storeId).subscribe((data: UtilisateurModel) =>
    {
      this.storeName = data;
    }, error => {
      console.log(error);
    });
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
}
