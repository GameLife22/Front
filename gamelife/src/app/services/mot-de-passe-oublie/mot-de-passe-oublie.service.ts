import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ProduitModel} from "../../model/produit.model";
import {EmailModel} from "../../model/email.model";

@Injectable({
  providedIn: 'root'
})
export class MotDePasseOublieService {

  constructor(private http: HttpClient) { }

  motPasseOublie(email: string) {
    return this.http.post(environment.baseUrl + 'auth/mdpoublie',
      {
        "login": email
      });
  }

  getEmailByToken(token : String) : Observable<EmailModel>{
    return this.http.get<EmailModel>(environment.baseUrl + `auth/getEmailByToken?token=${token}`);
  }
  motDePasseReset(mdp : string,token : string){
    console.log(mdp)
    console.log(token)
    return this.http.post(environment.baseUrl + `auth/mdpreset?token=${token}`,
      {
        "pwd": mdp
      });
  }







}
