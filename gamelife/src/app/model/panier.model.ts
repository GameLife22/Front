import { ItemPanierModel } from "./item-panier.model";
import { UtilisateurModel } from "./utilisateur.model";

export interface PanierModel {
    id: number;
    date: Date;
    etat: number;
    utilisateur: UtilisateurModel;
    itemPaniers: ItemPanierModel[];
}
