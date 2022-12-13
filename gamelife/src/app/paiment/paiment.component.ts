import { Component, OnInit } from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.scss']
})
export class PaimentComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  constructor() { }

  ngOnInit(): void {
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb', //sb = SandBox pour les tests
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount : {
              currency_code : 'EUR',
              value : '9.99',
              breakdown: {
                item_total : {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items : [
              {
                name: 'Goat simulator',
                quantity : '1',
                category : "DIGITAL_GOODS",
                unit_amount : {
                  currency_code : 'EUR',
                  value : '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label : 'paypal',
        layout : "vertical",
        color : 'blue'
      },
      onApprove : (data,actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get.then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
    },
      onClientAuthorization : (data) =>{
        //notification pour le back
      },
      onCancel:(data,actions)=> {
        console.log('Oncancel',data,actions);
      },
      onError: err => {
        console.log('OnError',err);
      },
      onClick: (data,actions) => {
        console.log('onClick',data,actions);
      },
    }
  }

}
