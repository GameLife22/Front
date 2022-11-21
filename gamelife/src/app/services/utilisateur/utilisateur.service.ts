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

  login(email: string, password: string): Observable<LoginModel> {
    return this.http.post<LoginModel>(environment.baseUrl+'auth/signin' ,
      {
      "login" : email,
      "pwd" : password
      }
    );
  }


}

