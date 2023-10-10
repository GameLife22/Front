export interface GetUsersModel {
  id : number;
  nom : string;
  prenom : string;
  email : string;
  num_rue : number;
  rue : string;
  ville : string;
  code_postal : number;
  role : string;
  num_siren : string | null;
  etat_compte : string

}
