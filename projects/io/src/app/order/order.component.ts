import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="stockSymbol">
    Dentro da Order Component<br />
     Comprar {{quantity}} ações de {{stockSymbol}}
    </span>
  `,
  styles: [':host{background:cyan}']
})
export class OrderComponent implements OnInit {
  @Input() quantity:number;
  @Input() stockSymbol:string;
  /* private _stockSymbol:string;

  @Input() set stockSymbol(value:string){
    console.log('alterar qualquer pelo meio...');
    this._stockSymbol = value;
  }

  get stockSymbol():string{
    return this._stockSymbol;
  }
   */

  constructor() { }

  ngOnInit() {
  }

}
