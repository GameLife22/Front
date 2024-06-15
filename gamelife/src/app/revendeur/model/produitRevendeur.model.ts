export interface ProduitRevendeurModel {
    id: string;
    stock: number;
    prix: number;
    etat: string;
    produit: {
        id: string;
        nom: string;
        description: string;
        plateformes: {
            id: string;
            libelle: string;
        }[];
        images: {
            id: string;
            image: string;
            title: string;
        }[];
    };
    utilisateur: {
        id: string;
    };
}
