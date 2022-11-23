import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginModel } from "../../model/login.model";
import { environment } from "../../../environments/environment";
import { UpdatePwdModel } from 'src/app/model/update.pwd.model';
import { UpdateEtatModel } from 'src/app/model/update.etat.model';
import { UpdateCompteModel } from 'src/app/model/update.compte.model';
import { IsRevendeurModel } from 'src/app/model/is.revendeur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {




  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(environment.baseUrl + 'auth/signin',
      {
        "login": email,
        "pwd": password
      }
    );
  }

  updateUser(id: number, nom: string, prenom: string, email: string, num_rue: number, rue: string, ville: string, codePostal: number, num_siren: string | null) : Observable<UpdateCompteModel>{
    let contentHeader = new HttpHeaders({ "Content-Type":"application/json" });
    return this.http.post<UpdateCompteModel>(environment.baseUrl + 'gestioncomtpe/infos',
      {
        "id": id,
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "numRue": num_rue,
        "rue": rue,
        "ville": ville,
        "codePostal": codePostal,
        "numSiren": num_siren
      });
  }



  updatePassword(id: number, new_mdp: string): Observable<UpdatePwdModel> {
    return this.http.post<UpdatePwdModel>(environment.baseUrl + 'gestioncomtpe/mdp',
      {
        "id": id,
        "new_mdp": new_mdp
      }
    );
  }

  updateEtat(id: number, etat: string): Observable<UpdateEtatModel> {
    return this.http.post<UpdateEtatModel>(environment.baseUrl + 'gestioncomtpe/etat',
      {
        "id": id,
        "new_etat": etat,
      }
    );
  }

  isRevendeur(id: number): Observable<boolean>{
    return this.http.post<boolean>(environment.baseUrl + 'gestioncomtpe/estrevendeur',
    {
      "id" : id
    })
  }
}

