import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierModel } from 'src/app/model/panier.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllPaniers(): Observable<PanierModel[]> {
    return this.http.get<PanierModel[]>(this.baseUrl + "panier/all");
  }


  


}
