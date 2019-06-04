import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="stockSymbol">
    Dentro da Order Component<br />
     Comprar {{quantity}} ações de {{stockSymbol}} ao preco de: {{price | currency}}
    </span>
  `,
  styles: [':host{background:cyan}']
})
export class OrderComponent implements OnInit {
  @Input() quantity:number;
  private _stockSymbol:string;
  
  //acrescentado
  @Input() price:number;

  @Input() set stockSymbol(value:string){
    console.log('alterar qualquer pelo meio...');
    this._stockSymbol = value;
  }

  get stockSymbol():string{
    return this._stockSymbol;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
