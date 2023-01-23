import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {MotDePasseOublieService} from "../../services/mot-de-passe-oublie/mot-de-passe-oublie.service";
import {UtilisateurService} from "../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-reset-mot-de-passe',
  templateUrl: './reset-mot-de-passe.component.html',
  styleUrls: ['/reset-mot-de-passe.component.scss']
})
export class ResetMotDePasseComponent implements OnInit {

  userFormGroup: any;
  token : string;
  email : string;

  constructor(private fb : FormBuilder,
              private activatedRoute : ActivatedRoute,
              private mdpOublieService : MotDePasseOublieService,
              private router  : Router,
              private utilisateurService : UtilisateurService) { }

  ngOnInit(): void {

   this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
      this.mdpOublieService.getEmailByToken(this.token).subscribe( {
        next: response => {
          this.email = response.login
        }
      })
   })

    this.userFormGroup = this.fb.group(
      {
        password: this.fb.control("", [
          Validators.required,
          Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]),
        password_conf : this.fb.control("", [
          Validators.required,
          this.utilisateurService.matchValidator('password')])
      })
  }

  modifierMdp(){
    let mdp = this.userFormGroup.value.password
    this.mdpOublieService.motDePasseReset(mdp,this.token).subscribe({
      next : value => {
        this.router.navigate(['/login'])

      }
    })
  }



}
