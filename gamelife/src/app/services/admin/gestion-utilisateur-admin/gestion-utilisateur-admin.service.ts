import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {GetUsersModel} from "../../../model/get.users.model";

@Injectable({
  providedIn: 'root'
})
export class GestionUtilisateurAdminService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<GetUsersModel[]> {
    return this.http.get<GetUsersModel[]>(environment.baseUrl+'admin/users/all');
  };

}
