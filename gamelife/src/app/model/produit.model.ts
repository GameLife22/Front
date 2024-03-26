/**
 * Produit Interface
 */
 export interface ProduitModel {

    id?: number;
    categorie?: string;
    description?: string;
    detail?: string;
    nom?: string;
    plateforme?: string;
    prix: number;
    images: string[];

}
