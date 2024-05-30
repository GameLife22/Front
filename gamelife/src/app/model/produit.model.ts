import {ImageModel} from "./image.model";
import {CategorieModel} from "./categorie.model";
import {PlateformeModel} from "./plateforme.model";

export interface ProduitModel {
  idProduit: string;
  nom: string;
  description: string;
  categorie: CategorieModel[];
  plateforme: PlateformeModel[];
  images: ImageModel[];
}
