import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm : FormGroup;
  roleControl = new FormControl('ROLE_ACHETEUR');

  options = this.fb.group({
    role : this.roleControl,
  });
  constructor(private fb : FormBuilder,
              private service : UtilisateurService) { }

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group(
      {
        nom : this.fb.control("",[Validators.required]),
        prenom : this.fb.control("",[Validators.required]),
        pwd : this.fb.control("",[Validators.required,Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]),
        email : this.fb.control("",[Validators.required,Validators.email]),
        numRue : this.fb.control("",[Validators.required,Validators.min(1)]),
        rue : this.fb.control("",[Validators.required]),
        ville : this.fb.control("",[Validators.required]),
        codePostal : this.fb.control("",[Validators.required,Validators.minLength(5)]),
        siren : this.fb.control("")
      }
    )
  }
  getSirenValue(): boolean{
    let result = this.roleControl.value === "ROLE_REVENDEUR";
    if(result){
      this.inscriptionForm.controls["siren"].addValidators([Validators.minLength(9)]);
    }else {
      this.inscriptionForm.controls["siren"].clearValidators();
    }
    return result;
  }
  getErrorMessage() {
    if (this.inscriptionForm.controls['email'].hasError('required')) {
      return 'Champ requis';
    }

    return this.inscriptionForm.controls['email'].hasError('email') ? 'Email invalide' : '';
  }
  handleInscription(){
    let role = this.roleControl;
    let siren
    if(role.value === "ROLE_REVENDEUR"){
      siren = this.inscriptionForm.value.siren;
    }
    let nom = this.inscriptionForm.value.nom;
    let prenom = this.inscriptionForm.value.prenom;
    let pwd = this.inscriptionForm.value.pwd;
    let email = this.inscriptionForm.value.email;
    let numRue = this.inscriptionForm.value.numRue;
    let rue = this.inscriptionForm.value.rue;
    let ville = this.inscriptionForm.value.ville;
    let codePostal = this.inscriptionForm.value.codePostal;


    this.service.inscription(nom,prenom,email,pwd,numRue,rue,ville,codePostal,siren,role.value).subscribe()



  }


}
