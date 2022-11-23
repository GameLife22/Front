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
   * Cette méthode permet de récupérer une liste de jeux vidéos à partir d'un mot clés (nom du jeu vidéo)
   * @param name : nom du jeu vidéo recherché
   * @returns : une liste de jeux vidéos
   * @author: fabien
   */
  public getProductsByName(name: string): Observable<ProduitModel[]>  {
    return this.http.get<ProduitModel[]>(this.baseUrl+`produit/search?nom=${name}`)
  }


  public getAllProduit(): Observable<ProduitModel[]>{

    return this.http.get<ProduitModel[]>(this.baseUrl + "produit/all");
    
  }

}