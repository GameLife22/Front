import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "../../model/login.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {




  constructor(private http: HttpClient) {
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
          let token = resp.headers.get('Authorization')
          if (typeof token === "string") {
            sessionStorage.setItem('JWT_TOKEN', token)
          }},
        (resp)=>{
          console.log(resp.message)
        }

      );
  };




}

