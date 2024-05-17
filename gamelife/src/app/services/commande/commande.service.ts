import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { Commande } from "src/app/model/commande.model";
import { ProduitModel } from "src/app/model/produit.model";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root'
  })

  export class CommandeService {
  private baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {
  }

  getCommandeDetails(): Observable<Commande> {
    // Appeler le backend pour récupérer les détails de la commande
    return this.http.get<Commande>(this.baseUrl + 'commande/details');
  }

  // fais le ajout-produit dans le panier
}
