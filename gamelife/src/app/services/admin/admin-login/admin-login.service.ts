import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<HttpResponse<any>> {
     return this.http.post<HttpResponse<any>>(environment.baseUrl+'auth/signin' ,
      {
        "login" : email,
        "pwd" : password
      },
       {  observe: 'response' });

  };

}
