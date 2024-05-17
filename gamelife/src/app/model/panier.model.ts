

export interface PanierModel {
  id: string;
  produitId: string;
  nom: string;
  prix: number;
  quantite: number;

}

export interface Panier {
  items: PanierModel[];
  total: number;
}
