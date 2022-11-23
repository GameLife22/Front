import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from 'src/app/model/produit';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})


export class ProduitServiceService {

  private baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) {}

  getAllProduit(): Observable<produit[]>{

    return this.http.get<produit[]>(this.baseUrl + "produit/all");
    
  }
    
 
}
