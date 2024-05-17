import { ItemPanierPkModel } from "./item-panier-pk.model";
import { ProduitModel } from "./produit.model";

export interface ItemCommandeRequeteModel {
  idProduitRevendeur: string;
  quantite: number;
}
