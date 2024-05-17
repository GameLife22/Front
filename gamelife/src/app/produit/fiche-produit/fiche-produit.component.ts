import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { ErrorHandlerService } from 'src/app/partage/services/error-handler.service';
import { PanierService } from "../../services/panier/panier.service";
import { ProduitRevendeurModel } from "../../model/produit.revendeur.model";
import { ItemCommandeModel } from "../../model/item.commande.model";
import { TokenService } from "../../services/token/token.service";
import { Commande } from "../../model/commande.model";
import {ProduitModel} from "../../model/produit.model";

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
  })
  export class FicheProduitComponent implements OnInit {

    errorMessage: string = '';
    id: string;
    game: ItemCommandeModel | any;
    userId: string | null;
    commande: Commande | any;
    panierCree: boolean = false;
    produitAjoute: boolean = false;
  afficherMessagePanierNonCree: boolean = false; // Ajout de la variable





  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProduitService,
              private errorHandler: ErrorHandlerService,
              private panierService: PanierService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id, "id");
      this.afficherRevendeursParProduit();
    });
  }


  // Méthode pour créer un panier
  creerPanier(): void {
    // Vérifier si l'utilisateur est connecté
    if (this.tokenService.isLogged()) {
      const userId = this.tokenService.getUserId();
      if (!userId) {
        console.error("ID de l'utilisateur non défini.");
        // Gérer le cas où l'ID de l'utilisateur est absent
        return;
      }

      // Créer un objet Commande pour représenter le panier
      const commandeDto: Commande = {
        // Générer un identifiant unique côté client ou laisser vide pour que le serveur le génère
        id: null ,
        idUtilisateur: userId,
        etat: 'NOUVELLE', // Définir l'état initial du panier
        numRueLivraison: 0, // Remplacer par les détails de livraison réels
        rueLivraison: "", // Remplacer par les détails de livraison réels
        villeLivraison: '', // Remplacer par les détails de livraison réels
        codePostalLivraison: 0, // Remplacer par les détails de livraison réels
        date: new Date(), // Date actuelle
        produits: [] // Initialiser le panier avec une liste vide de produits
      };

      console.log('Panier créé avec succès :', commandeDto),
        // Appeler le service pour créer le panier
      this.panierService.creerCommande(commandeDto).subscribe(
        (commande: Commande) => {
          console.log('Panier créé avec succès :', commande);
          this.panierCree = true;
        },
        (error: any) => {
          this.errorMessage = error;
          console.error('Une erreur s\'est produite lors de la création du panier : ', error);
        }
      );
    }
  }


  ajouterAuPanier(item: ProduitRevendeurModel): void {
    // Vérifier si l'utilisateur est connecté
    if (this.tokenService.isLogged()) {
      const userId = this.tokenService.getUserId();
      if (!userId) {
        console.error("ID de l'utilisateur non défini.");
        // Gérer le cas où l'ID de l'utilisateur est absent
        return;
      }


      // Une fois que l'id de la commande est récupéré, procéder à l'ajout du produit au panier
      this.panierService.getCommandeId(userId).subscribe(
        (commande: any) => {
          this.commande = commande;
          console.log('ID de la commande récupérée :', this.commande.id);

          const itemCommandeDto: { id: string; idProduitRevendeur: string; idCommande: any; quantite: number } = {
            id: this.id,
            idCommande: this.commande.id, // Utilisation de l'ID de la commande récupérée
            idProduitRevendeur: item.id,
            quantite: 1
          };

          // Appeler le service pour ajouter le produit au panier de l'utilisateur
          this.panierService.ajouterProduitDansCommande(userId, itemCommandeDto)
            .subscribe(
              () => {
                console.log('Produit ajouté au panier avec succès.');
                this.produitAjoute = true

              },
              error => {
                console.error('Erreur lors de l\'ajout du produit au panier:', error);
              }
            );
        },
        error => {
          console.error('Erreur lors de la récupération de l\'ID de la commande :', error);
        }
      );
    } else {
      // Rediriger l'utilisateur vers la page de connexion s'il n'est pas connecté
      this.router.navigate(['/login']);
    }
  }

  afficherRevendeursParProduit(): void {
    this.productService.trouverRevendeursParProduit(this.id)
      .subscribe({
        next: (res) => {
          console.log(res, "response");
          this.game = res;
          if (this.game && this.game.length > 0) {
            this.game.forEach((item: ProduitRevendeurModel) => {
              item.produit_id = this.id;


            });
          }
          console.log('Données récupérées :', this.game);
        },
        error: (e) => {
          this.errorHandler.handleError(e);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      });
  }


}
