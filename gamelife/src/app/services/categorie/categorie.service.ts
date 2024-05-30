import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {CategorieModel} from "../../model/categorie.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  public recupererCategories(): Observable<CategorieModel[]>{
    return this.http.get<CategorieModel[]>(this.baseUrl + "api/v1/categories");
  }
}
