import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TokenService} from "../../../services/token/token.service";
import {ProduitRevendeurModel} from "../../model/produitRevendeur.model";
import {ModifProduitRevendeurModel} from "../../model/modif.produitRevendeur.model";

@Injectable({
  providedIn: 'root'
})
export class MesProduitsService {

  baseUrl = environment.baseUrl

  constructor(private http : HttpClient,public tokenService : TokenService) { }

  public getAllProduitDuRevendeur(): Observable<ProduitRevendeurModel[] >{
    return this.http.get<ProduitRevendeurModel[]>(this.baseUrl + "api/v1/produit_revendeur/utilisateur/"
      +this.tokenService.getUserIdFromToken());

  }
  public modifierProduit(id: string, produitRevendeur: ModifProduitRevendeurModel): Observable<any> {
    return this.http.put(this.baseUrl + "api/v1/produit_revendeur/"+id,{
      "stock" : produitRevendeur.stock,
      "prix": produitRevendeur.prix
    },{
      responseType: 'text',
    });
  }
  public supprimerProduit(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "api/v1/produit_revendeur/"+id,{
      responseType: 'text',
    });
  }
}

