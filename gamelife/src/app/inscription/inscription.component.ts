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
  roleControl = new FormControl('acheteur');
  options = this.fb.group({
    role : this.roleControl,
  });
  constructor(private fb : FormBuilder,
              private loginService : UtilisateurService) { }

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group(
      {
        nom : this.fb.control("",[Validators.required]),
        prenom : this.fb.control("",[Validators.required,Validators.email]),
        pwd : this.fb.control("",[Validators.required,Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]),
        email : this.fb.control("",[Validators.required,Validators.email]),
        numRue : this.fb.control("",[Validators.required,Validators.min(1)]),
        rue : this.fb.control("",[Validators.required]),
        ville : this.fb.control("",[Validators.required]),
        siren : this.fb.control("",[Validators.minLength(9)])
      }
    )
  }

  getSirenValue(): boolean{

    return this.roleControl.value === "vendeur" || false;
  }
  

}
