import { Component, OnInit } from '@angular/core';
import { PanierModel } from '../model/panier.model';
import {PanierService} from "../services/panier/panier.service";
import {ProduitModel} from "../model/produit.model";
import {Commande} from "../model/commande.model";
import {getTableUnknownDataSourceError} from "@angular/cdk/table/table-errors";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  errorMessage: string = '';

  produitsPanier: ProduitModel[] | any ;
  prixTotal: number = 0;
  id: string | null;
  commandeValidee: boolean = false;// Variable pour contrôler l'affichage du message de succès


  constructor(private activatedRoute: ActivatedRoute,
    private  tokenService: TokenService,
    private panierService: PanierService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id, "id");
      this.afficherProduitsPanier();
    });
    // Récupérer les produits du panier
    this.afficherProduitsPanier();
  }

  // Valider la commande
  validerCommande(): void {
    // Vérifier si l'utilisateur est connecté
    if (this.tokenService.isLogged()) {
      const userId = this.tokenService.getUserId();
      if (!userId) {
        console.error("ID de l'utilisateur non défini.");
        // Gérer le cas où l'ID de l'utilisateur est absent
        return;
      }
      // Valider la commande pour l'utilisateur connecté
      this.panierService.validerCommande(userId).subscribe(
        (commande: Commande) => {
          console.log('Commande validée :', commande);
          // Mettre à jour le statut de la commande
          this.commandeValidee = true;
          // Rediriger l'utilisateur vers la page de confirmation de commande
          // this.router.navigate(['/confirmation-commande', commande.id]);
        },
        (error: any) => {
          this.errorMessage = error;
          console.error('Une erreur s\'est produite lors de la validation de la commande : ', error);
        }
      );
    }
  }


  // Méthode pour afficher les produits du panier
  afficherProduitsPanier(): void {
    // Vérifier si l'utilisateur est connecté
    if (this.tokenService.isLogged()) {
      const userId = this.tokenService.getUserId();
      if (!userId) {
        console.error("ID de l'utilisateur non défini.");
        // Gérer le cas où l'ID de l'utilisateur est absent
        return;
      }
      // Récupérer les produits du panier pour l'utilisateur connecté
      this.panierService.getAllProduitsPanier(userId).subscribe(
        (produits: ProduitModel[]) => {
          this.produitsPanier = produits;
          console.log('Produits du panier récupérés :', this.produitsPanier);
          // Calculer le prix total des produits du panier
          this.calculerPrixTotal();
        },
        (error: any) => {
          this.errorMessage = error;
          console.error('Une erreur s\'est produite lors de la récupération des produits du panier : ', error);
        }
      );
    }
  }
  // Méthode pour calculer le prix total
  calculerPrixTotal(): void {
    this.prixTotal = this.produitsPanier.reduce((total: number, produit: ProduitModel) => total + produit.prix, 0);
  }

  // Méthode pour vérifier si l'utilisateur peut commander

  // Méthode pour supprimer un produit du panier
  supprimerProduitPanier(produit: ProduitModel): void {
    // Trouver l'index du produit dans this.produitsPanier
    const index = this.produitsPanier.findIndex((p: { id: string; }) => p.id === produit.id);

    // Vérifier si le produit a été trouvé
    if (index !== -1) {
      // Supprimer le produit de this.produitsPanier
      this.produitsPanier.splice(index, 1);

      // Recalculer le prix total
      this.calculerPrixTotal();
    }
  }



}
