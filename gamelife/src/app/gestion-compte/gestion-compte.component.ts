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

  userModel: UpdateCompteModel
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


    if (this.token != null){
      this.decriptToken = this.getDecodedAccessToken(this.token);
      this.id = this.decriptToken.user;
      this.findUser(this.id);
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
    }

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

  findUser(id : number){
    this.GestionCompteService.getUser(this.id).subscribe((response)=>{
      this.userModel = response
      this.userFormGroup.setValue({
        "nom" : response.nom,
        "prenom" : response.prenom,
        "email" : response.email,
        "numRue" : response.num_rue,
        "rue" : response.rue,
        "ville" : response.ville,
        "codePostal" : response.code_postal,
        "numSiren" : response.num_siret
      })
    })
  }

  handleUpdateUser() {
    this.errorEmail = undefined;
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
        this.errorEmail = value.error.message;
        console.log(this.errorEmail);
    });
  }


  handleUpdatePassword() {
    this.errorPassword = undefined;
    let oldPwd: string = this.mdpFormGroup.value.oldPwd
    let newPwd1: string = this.mdpFormGroup.value.newPwd1
    let newPwd2: string = this.mdpFormGroup.value.newPwd2
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
            this.mdpFormGroup.get('oldPwd')?.setValue("");
            this.mdpFormGroup.get('newPwd1')?.setValue("");
            this.mdpFormGroup.get('newPwd2')?.setValue("");
          });
        window.location.reload();
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
