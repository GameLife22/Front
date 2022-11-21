import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginModel } from "../../model/login.model";
import { environment } from "../../../environments/environment";
import { UpdatePwdModel } from 'src/app/model/update.pwd.model';
import { UpdateEtatModel } from 'src/app/model/update.etat.model';
import { UpdateCompteModel } from 'src/app/model/update.compte.model';

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

  updateUser(nom: string, prenom: string, email: string, num_rue: number, rue: string, ville: string, cp: number, num_siren: string | null): Observable<UpdateCompteModel> {
    return this.http.post<UpdateCompteModel>(environment.baseUrl + 'gestion-compte',
      {
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "num_rue": num_rue,
        "rue": rue,
        "ville": ville,
        "cp": cp,
        "num_siren": num_siren
      }
    );
  }

  updatePassword(email: string, oldPwd: string, newPwd: string): Observable<UpdatePwdModel> {
    return this.http.post<UpdatePwdModel>(environment.baseUrl + 'gestion-compte',
      {
        "email": email,
        "oldPwd": oldPwd,
        "newPwd": newPwd
      }
    );
  }

  updateEtat(email: string, etat: string): Observable<UpdateEtatModel> {
    return this.http.post<UpdateEtatModel>(environment.baseUrl + 'gestion-compte',
      {
        "email": email,
        "etat": etat,
      }
    );
  }
}

