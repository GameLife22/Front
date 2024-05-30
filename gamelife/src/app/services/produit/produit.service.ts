import {inject, Injectable, Signal, WritableSignal} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProduitModel } from 'src/app/model/produit.model';
import { environment } from 'src/environments/environment';
import {ProduitRechercheModel} from "../../model/produitRecherche.model";
import {Page} from "ngx-pagination";
import {PageModel} from "../../model/page.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  public rechercherProduitsContenantNom(nomProduit: string): Observable<ProduitModel[]>  {
    return this.http.get<ProduitModel[]>(this.baseUrl+`api/v1/recherche/${nomProduit}`)
  }

  public recupererProduits(page: number, produitsParPage: number): Observable<PageModel<ProduitModel>>{
    return this.http.get<PageModel<ProduitModel>>(this.baseUrl + `api/v1/produits?page=${page}&size=${produitsParPage}`);
  }

  public recupererProduitParId(idProduit: string): Observable<ProduitModel> {
    return this.http.get<ProduitModel>(this.baseUrl + `api/v1/produits/${idProduit}`);
  }
}
