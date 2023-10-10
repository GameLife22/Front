import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdminLoginService} from "../../services/admin/admin-login/admin-login.service";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminFormGroup: any;

  constructor(private fb : FormBuilder,
              private loginService : AdminLoginService,
              private tokenService : TokenService,
              private router: Router) { }

  ngOnInit(): void {


    this.adminFormGroup = this.fb.group(
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
    let email = this.adminFormGroup.value.email
    let password = this.adminFormGroup.value.password
    this.loginService.login(email,password).subscribe(
      (resp) => {

        let token = resp.headers.get('Authorization')
        if (typeof token === "string") {
          this.tokenService.saveToken(token)
        }
        this.router.navigate(['/admin/home'])
      }
    )
  }



}
