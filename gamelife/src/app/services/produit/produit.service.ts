import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProduitModel } from 'src/app/model/produit.model';
import { environment } from 'src/environments/environment';

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
    return this.http.get<ProduitModel[]>(this.baseUrl+`produit/search?nom=${name}`)
  }


  public getAllProduit(): Observable<ProduitModel[]>{

    return this.http.get<ProduitModel[]>(this.baseUrl + "produit/all");
    
  }

  /**
   * Cette méthode permet de récupérer un jeu vidéo à partir de son id
   * @param id: identifiant unique du jeu vidéo
   * @returns: un jeu video
   * @author: Fabien
   */
  public getProductById(id: string): Observable<ProduitModel> {
    return this.http.get<ProduitModel>(this.baseUrl + `produit/${id}`);
  }

}