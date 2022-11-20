import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormGroup : FormGroup;

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
    this.loginService.login(email,password).subscribe()
  }

}
