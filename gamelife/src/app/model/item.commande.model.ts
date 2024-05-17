import {ProduitModel} from "./produit.model";

export interface ItemCommandeModel {
  id: string; // UUID
  idCommande: string; // UUID
  idProduitRevendeur: string; // UUID
  quantite: number;
  produit: ProduitModel
}
