import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-validation-inscription',
  templateUrl: './validation-inscription.component.html',
  styleUrls: ['./validation-inscription.component.scss']
})
export class ValidationInscriptionComponent implements OnInit {
  email : string;

  constructor(private service : UtilisateurService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.email = param['email'];
    })
    this.emailDeValidation();
  }

  emailDeValidation(){
    console.log(this.email)
    this.service.validationInscription(this.email).subscribe();
  }

}
