import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur/utilisateur.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-activation-compte',
  templateUrl: './activation-compte.component.html',
  styleUrls: ['./activation-compte.component.scss']
})
export class ActivationCompteComponent implements OnInit {

  token : string;

  constructor(private service : UtilisateurService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.token = param['token']
    });
    this.service.activerCompte(this.token).subscribe();
  }

}
