import { Injectable } from '@angular/core';
import {TokenService} from "../token/token.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { UpdatePwdModel } from 'src/app/model/update.pwd.model';
import { UpdateEtatModel } from 'src/app/model/update.etat.model';
import { UpdateCompteModel } from 'src/app/model/update.compte.model';
import {Router} from "@angular/router";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient,
              private tokenService : TokenService,
              private router : Router) {
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
            this.tokenService.saveToken(token)
          }
          this.router.navigate(['/gestioncompte'])
          window.location.reload();
          },
        (resp)=>{
          console.log(resp.message)
        }

      );
  };



    inscription(nom: string, prenom: string, email: string, password: string, numRue: Int16Array, rue: string, ville: string, codePostal: Int16Array, siren: Int16Array, role: string | null): Observable<string> {
    return this.http.post(environment.baseUrl+'inscription/env1' ,
      {
      "nom":nom,
      "prenom":prenom,
      "mdp":password,
      "email":email,
      "ville":ville,
      "num_rue":numRue,
      "rue":rue,
      "role":role,
      "num_siren":siren,
      "etat":1,
      "code_postal":codePostal
      },
      {
        responseType: 'text',
      }
    );
  }


  updateUser(id: number, nom: string, prenom: string, email: string, num_rue: number, rue: string, ville: string, codePostal: number, num_siren: string | null) : Observable<UpdateCompteModel>{
    let contentHeader = new HttpHeaders({ "Content-Type":"application/json" });
    return this.http.post<UpdateCompteModel>(environment.baseUrl + 'gestioncomtpe/infos',
      {
        "id": id,
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "numRue": num_rue,
        "rue": rue,
        "ville": ville,
        "codePostal": codePostal,
        "numSiren": num_siren
      });
  }


  updatePassword(id: number, new_mdp: string): Observable<UpdatePwdModel> {
    return this.http.post<UpdatePwdModel>(environment.baseUrl + 'gestioncomtpe/mdp',
      {
        "id": id,
        "new_mdp": new_mdp
      }
    );
  }

  updateEtat(id: number, etat: string): Observable<UpdateEtatModel> {
    return this.http.post<UpdateEtatModel>(environment.baseUrl + 'gestioncomtpe/etat',
      {
        "id": id,
        "new_etat": etat,
      }
    );
  }

  isRevendeur(id: number): Observable<boolean>{
    return this.http.post<boolean>(environment.baseUrl + 'gestioncomtpe/estrevendeur',
    {
      "id" : id
    })
  }
  getSiret(siret: number){
      return this.http.post(environment.baseUrl + 'inscription/siret',{
        "siret" : siret
        })
  }

  matchValidator( matchTo : string, reverse?: boolean): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
      if (control.parent && reverse){
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if(c){
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent && !!control.parent.value && control.value === (control.parent?.controls as any)[matchTo].value ? null : {matching : true};
    };
  }

}

