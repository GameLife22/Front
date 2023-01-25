import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  status: boolean = false;

  div : any
  clickEvent(){
    this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

  divAff(value : number) {
    this.div = value
  }

}
