import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from "../services/utilisateur/utilisateur.service";
import { IsRevendeurModel } from '../model/is.revendeur.model';
import { __await } from 'tslib';
import {UpdateCompteModel} from "../model/update.compte.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {
  showHide: boolean = false;
  userFormGroup: FormGroup;
  mdpFormGroup: FormGroup;
  etatFormGroup: FormGroup;
  estRevendeurModel: boolean;

  constructor(private fb: FormBuilder,
    private GestionCompteService: UtilisateurService) { }

  ngOnInit(): void {

    this.handleIsRevendeur();

    this.userFormGroup = this.fb.group(
      {
        nom: this.fb.control(""),
        prenom: this.fb.control(""),
        email: this.fb.control("", [Validators.email]),
        numRue: this.fb.control(""),
        rue: this.fb.control(""),
        ville: this.fb.control(""),
        codePostal: this.fb.control(""),
        numSiren: this.fb.control("")

      }
    )
    this.mdpFormGroup = this.fb.group(
      {
        oldPwd: this.fb.control(""),
        newPwd1: this.fb.control("", [Validators.pattern("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$")]),
        newPwd2: this.fb.control("", [Validators.pattern("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$")])
      }
    )
    this.etatFormGroup = this.fb.group(
      {
      }
    )
  }


  handleUpdateUser() {

    /* a faire :
        récupérer l'id dans le token
    */
    let id: number = 4 // a absolument changer
    let nom: string = this.userFormGroup.value.nom
    let prenom: string = this.userFormGroup.value.prenom
    let email: string = this.userFormGroup.value.email
    let numRue: number = this.userFormGroup.value.numRue
    let rue: string = this.userFormGroup.value.rue
    let ville: string = this.userFormGroup.value.ville
    let codePostal: number = this.userFormGroup.value.codePostal
    let numSiren: string | null = this.userFormGroup.value.numSiren
    let observable : Observable<UpdateCompteModel> = this.GestionCompteService.updateUser(id, nom, prenom, email, numRue, rue, ville, codePostal, numSiren)
    observable.subscribe(value => console.log(value));
  }


  handleUpdatePassword() {

    /* a faire :
        récupérer l'id dans le token
    */
    let id: number = 4 // a absolument changer
    let oldPwd: string = this.mdpFormGroup.value.oldPwd
    let new_mdp1: string = this.mdpFormGroup.value.newPwd1
    let new_mdp2: string = this.mdpFormGroup.value.newPwd2

    if (new_mdp1 == new_mdp2) {
      let new_mdp = new_mdp1
      if (new_mdp != oldPwd) { // attention récupérer l'ancien mot de passe
        this.GestionCompteService.updatePassword(id, new_mdp).subscribe()
      }
    }
  }

  handleUpdateEtat() {
    /* a faire :
        récupérer l'id dans le token
    */
    let id: number = 4; // a absolument changer
    let new_etat: string = "desactive";
    this.GestionCompteService.updateEtat(id, new_etat).subscribe();
  }

  handleIsRevendeur(){
    /* a faire :
        récupérer l'id dans le token
    */
    let id: number = 4 // a absolument changer
    this.GestionCompteService.isRevendeur(id).subscribe({
      next: (res)=>  {
        this.estRevendeurModel = res;
      }
    }
    )
  }
}
