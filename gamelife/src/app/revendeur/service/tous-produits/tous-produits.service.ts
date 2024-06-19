import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GameModel} from "../../../model/game.model";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token/token.service";

@Injectable({
  providedIn: 'root'
})
export class TousProduitsService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,public tokenService :TokenService ) { }

  public getAllProduit(): Observable<GameModel[]>{
    let revendeurId = this.tokenService.getUserIdFromToken();
    return this.http.get<GameModel[]>(this.baseUrl + "api/v1/produits_revendeur/"+revendeurId);

  }

  public ajouterProduitAuRevendeur(produit: any,stock : number,prix : number): Observable<any> {
    return this.http.post(this.baseUrl + "api/v1/produit_revendeur",
      {
      "stock" : stock,
      "prix": prix,
      "etat":true,
      "idProduit":produit.id,
      "idUtilisateur":this.tokenService.getUserIdFromToken()
      },
      {
        responseType: 'text',
      });

  }
}
