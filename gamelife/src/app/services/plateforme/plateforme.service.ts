import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {PlateformeModel} from "../../model/plateforme.model";

@Injectable({
  providedIn: 'root'
})
export class PlateformeService {
  http = inject(HttpClient);
  baseUrl = environment.baseUrl;

  public recupererPlateformes(): Observable<PlateformeModel[]>{
    return this.http.get<PlateformeModel[]>(this.baseUrl + "api/v1/plateformes");
  }
}
