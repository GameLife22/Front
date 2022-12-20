import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from "../services/utilisateur/utilisateur.service";
import {UpdateCompteModel} from "../model/update.compte.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {

  token = sessionStorage.getItem("JWT_TOKEN");
  id: number
  decriptToken:any
  errorEmail: UpdateCompteModel | undefined;
  errorPassword: UpdateCompteModel | undefined;
  showHide: boolean = false;
  suppCompt: boolean = false;
  userFormGroup: FormGroup;
  mdpFormGroup: FormGroup;
  etatFormGroup: FormGroup;
  estRevendeurModel: boolean;

  constructor(private fb: FormBuilder,
    private GestionCompteService: UtilisateurService,
    private router : Router ) { }

  ngOnInit(): void {

    this.handleIsRevendeur();
    if (this.token != null){
      this.decriptToken = this.getDecodedAccessToken(this.token);
      console.log(this.decriptToken)
    }

    this.id = this.decriptToken.user.id;

    this.userFormGroup = this.fb.group(
      {
        nom: this.fb.control(this.decriptToken.user.nom),
        prenom: this.fb.control(this.decriptToken.user.prenom),
        email: this.fb.control(this.decriptToken.user.email, [Validators.email]),
        numRue: this.fb.control(this.decriptToken.user.num_rue),
        rue: this.fb.control(this.decriptToken.user.rue),
        ville: this.fb.control(this.decriptToken.user.ville),
        codePostal: this.fb.control(this.decriptToken.user.code_postal),
        numSiren: this.fb.control(this.decriptToken.user.num_siren)

      }
    )
    this.mdpFormGroup = this.fb.group(
      {
        oldPwd: this.fb.control(""),
        newPwd1: this.fb.control("", [Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]),
        newPwd2: this.fb.control("", [Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")])
      }
    )
    this.etatFormGroup = this.fb.group(
      {
      }
    )
  }


  getErrorMessage() {
    if (this.userFormGroup.controls['email'].hasError('required')) {
      return 'Champ requis';
    }

    return this.userFormGroup.controls['email'].hasError('email') ? 'Email invalide' : '';
  }


  handleEmailErro() {
    return this.errorEmail;
  }handleMdpError() {
    return this.errorPassword;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  handleUpdateUser() {
    this.errorEmail = undefined;
    /* a faire :
        récupérer l'id dans le token
    */
    let nom: string = this.userFormGroup.value.nom
    let prenom: string = this.userFormGroup.value.prenom
    let email: string = this.userFormGroup.value.email
    let numRue: number = this.userFormGroup.value.numRue
    let rue: string = this.userFormGroup.value.rue
    let ville: string = this.userFormGroup.value.ville
    let codePostal: number = this.userFormGroup.value.codePostal
    let numSiren: string | null = this.userFormGroup.value.numSiren
    let observable : Observable<UpdateCompteModel> = this.GestionCompteService.updateUser(this.id, nom, prenom, email, numRue, rue, ville, codePostal, numSiren)
    observable.subscribe(
      (response)=>{

    },(value)=> {
        console.log(value)
        this.errorEmail = value.error.message;
        console.log(this.errorEmail);
    });
  }


  handleUpdatePassword() {
    this.errorPassword = undefined;
    let oldPwd: string = this.mdpFormGroup.value.oldPwd
    let newPwd1: string = this.mdpFormGroup.value.newPwd1
    let newPwd2: string = this.mdpFormGroup.value.newPwd2
    console.log(oldPwd, newPwd1, newPwd2);
    if (newPwd1 == newPwd2) {
      let new_mdp = newPwd1
      if (new_mdp != oldPwd) {
        this.GestionCompteService.updatePassword(this.id, new_mdp, oldPwd).subscribe(
          (response)=>{
            this.showHide = false
            this.mdpFormGroup.get('oldPwd')?.setValue("");
            this.mdpFormGroup.get('newPwd1')?.setValue("");
            this.mdpFormGroup.get('newPwd2')?.setValue("");
          },(value)=> {
            this.errorPassword = value.error.message;
            console.log(this.errorPassword);
            this.mdpFormGroup.get('oldPwd')?.setValue("");
            this.mdpFormGroup.get('newPwd1')?.setValue("");
            this.mdpFormGroup.get('newPwd2')?.setValue("");
          });
      }
    }
  }

  handleUpdateEtat() {

    let new_etat: number = 0;
    this.GestionCompteService.updateEtat(this.id, new_etat).subscribe();
    this.router.navigate(['']);
  }

  handleIsRevendeur(){

    this.GestionCompteService.isRevendeur(this.id).subscribe({
      next: (res)=>  {
        this.estRevendeurModel = res;
      }
    }
    )
  }
}
