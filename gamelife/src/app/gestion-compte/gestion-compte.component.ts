import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";


@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {

  userFormGroup : FormGroup;

  constructor(private fb : FormBuilder,
              private GestionCompteService : UtilisateurService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group(
      {
        email : this.fb.control("",[Validators.required,Validators.email]),
        newPwd1 : this.fb.control("",[Validators.required,Validators.minLength(10)]),
        newPwd2 : this.fb.control("",[Validators.required,Validators.minLength(10)])

      }
    )
  }


  handleUpdateUser(){
    let nom = this.userFormGroup.value.nom
    let prenom = this.userFormGroup.value.prenom
    let email = this.userFormGroup.value.email
    let numRue = this.userFormGroup.value.numRue
    let rue = this.userFormGroup.value.rue
    let ville = this.userFormGroup.value.ville
    let cp = this.userFormGroup.value.cp
    let numSiren = this.userFormGroup.value.numSiren
    this.GestionCompteService.updateUser(nom, prenom, email, numRue, rue, ville, cp, numSiren).subscribe()
  }


  handleUpdatePassword(){
    /* a faire :
        récupérer l'email de la personne connecté
    */
    let email = "acheteur002@outlook.fr" // a absolument changer
    let oldPwd = this.userFormGroup.value.oldPwd
    let newPwd1 = this.userFormGroup.value.newPwd1
    let newPwd2 = this.userFormGroup.value.newPwd2
    
    if(newPwd1 == newPwd2){
      let newPwd = this.userFormGroup.value.newPwd1
      this.GestionCompteService.updatePassword(email, oldPwd, newPwd).subscribe()
    }
  }
}

