import { ItemPanierPkModel } from "./item-panier-pk.model";
import { ProduitModel } from "./produit.model";

export interface ItemPanierModel {
    id: ItemPanierPkModel;
  quantite: number;
  produit: ProduitModel;
}
