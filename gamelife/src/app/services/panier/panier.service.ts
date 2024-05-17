import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';import { environment } from 'src/environments/environment';
import { ItemCommandeModel} from 'src/app/model/item.commande.model';
import {ProduitModel} from "../../model/produit.model";
import {UtilisateurModel} from "../../model/utilisateur.model";
import {Commande} from "../../model/commande.model";
import {ItemCommandeRequeteModel} from "../../model/item.commande.requete.model";
import {ProduitService} from "../produit/produit.service";
@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  creerCommande(commandeDto: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.baseUrl}commande/creer`, commandeDto);
  }

  getCommandeId(userId: string ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}commande/${userId}`);
  }

  getAllProduitsPanier(userId: string): Observable<ProduitModel[]> {
    console.log('Tentative de récupération des produits du panier pour l\'utilisateur', userId);
    return this.http.get<ProduitModel[]>(`${this.baseUrl}commande/${userId}/produits`).pipe(
      catchError(error => {
        console.error('Une erreur s\'est produite lors de la récupération des produits du panier : ', error);
        return throwError('Une erreur s\'est produite lors de la récupération des produits du panier.');
      })
    );
  }

  ajouterProduitDansCommande(idUtilisateur: string | null, itemCommandeDto: {
    id: string;
    idProduitRevendeur: string;
    idCommande: any;
    quantite: number
  }): Observable<UtilisateurModel> {
    console.log('Tentative d\'ajout de produit dans la commande pour l\'utilisateur', idUtilisateur);
    console.log('Données du produit à ajouter:', itemCommandeDto);
    return this.http.put<UtilisateurModel>(`${this.baseUrl}commande/${idUtilisateur}/ajout-produit`, itemCommandeDto);
  }

  validerCommande(id: string): Observable<Commande> {
    return this.http.put<Commande>(`${this.baseUrl}commande/${id}/valider-commande`, {});
  }




}

