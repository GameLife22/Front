import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from "../services/utilisateur/utilisateur.service";


@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {

  userFormGroup: FormGroup;
  mdpFormGroup: FormGroup;
  etatFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
    private GestionCompteService: UtilisateurService) { }

  ngOnInit(): void {
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
    this.GestionCompteService.updateUser(id, nom, prenom, email, numRue, rue, ville, codePostal, numSiren).subscribe()
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
      if (new_mdp != oldPwd) {
        this.GestionCompteService.updatePassword(id, new_mdp).subscribe()
      }
    }
  }

  handleUpdateEtat() {

    /* a faire :
        récupérer l'id dans le token
    */
    let id: number = 4 // a absolument changer
    let new_etat: string = "desactive"
    this.GestionCompteService.updateEtat(id, new_etat).subscribe()
  }
}

