import {ProduitModel} from "./produit.model";

export interface ProduitRevendeurModel {
  id: string;
  stock: number;
  prix: number;
  etat: string;
  produit_id: string;
  produit: ProduitModel;


}
