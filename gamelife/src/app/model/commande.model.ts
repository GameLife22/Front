import {ProduitModel} from "./produit.model";

export interface Commande {
  id: string | null;
  idUtilisateur: string;
  etat: string;
  numRueLivraison: number;
  rueLivraison: string;
  villeLivraison: string;
  codePostalLivraison?: number; // Optionnel
  date: Date;
  produits: ProduitModel[];

}
