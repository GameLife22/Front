import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TokenService} from "../token/token.service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient,
              private tokenService : TokenService) {
  }

  login(email: string, password: string){
    let contentHeader = new HttpHeaders({ "Content-Type":"application/json" });
    this.http.post(environment.baseUrl+'auth/signin' ,
      {
        "login" : email,
        "pwd" : password
      },
      { headers: contentHeader, observe: 'response' })
      .subscribe(
        (resp) => {
          this.tokenService.clearToken()
          let token = resp.headers.get('Authorization')
          if (typeof token === "string") {
            this.tokenService.saveToken(token)
          }
          },
        (resp)=>{
          console.log(resp.message)
        }

      );
  };




}

