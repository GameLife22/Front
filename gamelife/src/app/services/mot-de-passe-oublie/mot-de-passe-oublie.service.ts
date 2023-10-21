import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {EmailModel} from "../../model/email.model";

@Injectable({
  providedIn: 'root'
})
export class MotDePasseOublieService {

  constructor(private http: HttpClient) { }

  motPasseOublie(email: string) {
    return this.http.post(environment.baseUrl + 'utilisateur/mdpoublie',
      {
        "login": email
      });
  }

  getEmailByToken(token : String) : Observable<EmailModel>{
    return this.http.get<EmailModel>(environment.baseUrl + `utilisateur/getEmailByToken?token=${token}`);
  }
  motDePasseReset(mdp : string,token : string){
    console.log(mdp)
    console.log(token)
    return this.http.post(environment.baseUrl + `utilisateur/mdpreset?token=${token}`,
      {
        "pwd": mdp
      });
  }







}
