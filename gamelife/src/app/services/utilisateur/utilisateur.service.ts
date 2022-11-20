import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginEntity} from "../../entity/loginEntity";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

   server = 'http://localhost:8080/auth/signin';


  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginEntity> {
    return this.http.post<LoginEntity>(this.server ,
      {
      "login" : email,
      "pwd" : password
      }
    );
  }


}

