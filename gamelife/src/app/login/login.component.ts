import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {Router} from "@angular/router";
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormGroup : FormGroup;
  hide = true;

  constructor(private fb : FormBuilder,
              private loginService : UtilisateurService,
              private tokenService : TokenService,
              private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("JWT_TOKEN")){
      this.router.navigate(['/gestioncompte'])
    }

    this.userFormGroup = this.fb.group(
      {
        email : this.fb.control("",[
          Validators.required,
          Validators.email]),
        password : this.fb.control("",[
          Validators.required,
          Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")])

      }
    )
  }
  handleLogin(){
    let email = this.userFormGroup.value.email
    let password = this.userFormGroup.value.password
    this.loginService.login(email,password).subscribe({
      next : (resp) => {
        let token = resp.headers.get('Authorization')
        if (typeof token === "string") {
          this.tokenService.saveToken(token)
        }
        this.router.navigate(['/gestioncompte'])
        window.location.reload();
      },
      error : (err) => {
        console.log(err.message)
      }
    })
  }
  handleRedirectionToInscription(){
    this.router.navigate(['/inscription']);
  }

  getErrorMessage(field : string , error : ValidationErrors){
    if (error['required']){
      return field + "is required"
    }
    else if(error['minLength']){
      return field.length+"\t"+field + "\t"+error['minLength']['requiredLength'] + " characters"
    }
    else
      return  ""
  }

}
