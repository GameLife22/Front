import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProduitModel } from 'src/app/model/produit.model';
import { environment } from 'src/environments/environment';
import {ProduitRevendeurModel} from "../../model/produit.revendeur.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  /**
   * Cette méthode permet de récupérer une liste de jeux vidéos à partir de son nom
   * @param name: nom du jeu vidéo
   * @returns: une liste de jeux vidéos
   * @author: Fabien
   */
  public getProductsByName(name: string): Observable<ProduitModel[]>  {
    return this.http.get<ProduitModel[]>(this.baseUrl+`produits/search?nom=${name}`)
  }


  public getAllProduit(): Observable<ProduitModel[]>{

    return this.http.get<ProduitModel[]>(this.baseUrl + "api/v1/produits");

  }

  /**
   * Cette méthode permet de récupérer un jeu vidéo à partir de son id
   * @param id: identifiant unique du jeu vidéo
   * @returns: un jeu video
   * @author: Fabien
   */
  public trouverRevendeursParProduit(id: string): Observable<ProduitRevendeurModel[]> {
    return this.http.get<ProduitRevendeurModel[]>(`${this.baseUrl}api/v1/produitrevendeurs/${id}`);
  }



}
