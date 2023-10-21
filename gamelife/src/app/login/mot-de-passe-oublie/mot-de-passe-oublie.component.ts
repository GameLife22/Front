import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MotDePasseOublieService} from "../../services/mot-de-passe-oublie/mot-de-passe-oublie.service";

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss']
})
export class MotDePasseOublieComponent implements OnInit {
  userFormGroup: any;
  page : number = 0

  constructor(private fb : FormBuilder,
              private mdpOublieService : MotDePasseOublieService ) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group(
      {
        email: this.fb.control("", [
          Validators.required,
          Validators.email])
      })
  }

  checkEmail() {
    let email = this.userFormGroup.value.email
    this.mdpOublieService.motPasseOublie(email).subscribe()
    this.page = 1

  }
}
