/**
 * Produit Interface
 */
 export interface ProduitModel {

    id?: number;
    categorie?: string;
    texteDescriptif?: string;
    detail?: string;
    nom?: string;
    plateforme?: string;
    prix: number;
    images: string[];

}
