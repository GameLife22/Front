import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormGroup : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group(
      {
        email : this.fb.control(""),
        password : this.fb.control("")

      }
    )
  }
  handleLogin(){

  }

}
