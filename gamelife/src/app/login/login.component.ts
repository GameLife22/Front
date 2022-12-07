import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormGroup : FormGroup;
  hide = true;

  constructor(private fb : FormBuilder,
              private loginService : UtilisateurService) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group(
      {
        email : this.fb.control("",[Validators.required,Validators.email]),
        password : this.fb.control("",[Validators.required,Validators.minLength(10)])

      }
    )
  }
  handleLogin(){
    let email = this.userFormGroup.value.email
    let password = this.userFormGroup.value.password
    this.loginService.login(email,password)
  }
  handleRedirectionToInscription(){
    document.location.href = "../inscription"
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
