import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "../../model/login.model";
import {environment} from "../../../environments/environment";
import { InscriptionModel } from 'src/app/model/inscription.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {




  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(environment.baseUrl+'auth/signin' ,
      {
      "login" : email,
      "pwd" : password
      }
    );
  }

    inscription(nom: string, prenom: string, email: string, password: string, numRue: Int16Array, rue: string, ville: string, codePostal: Int16Array, siren: Int16Array, role: string | null): Observable<string> {
    return this.http.post(environment.baseUrl+'inscription/env1' ,
      {
      "nom":nom,
      "prenom":prenom,
      "mdp":password,
      "email":email,
      "ville":ville,
      "num_rue":numRue,
      "rue":rue,
      "role":role,
      "num_siren":siren,
      "etat":"active",
      "code_postal":codePostal
      },
      {
        responseType: 'text',
      }
    );
  }


}

