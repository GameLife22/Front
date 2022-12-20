import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  token = sessionStorage.getItem("JWT_TOKEN");


  constructor() { }

  ngOnInit(): void {
  }
  deconnexion(): void{
    sessionStorage.removeItem("JWT_TOKEN");
    window.location.reload();
  }

}
