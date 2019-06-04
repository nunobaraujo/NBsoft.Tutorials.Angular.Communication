import { Component } from '@angular/core';
import { PriceQuote } from './iprice.quote';

@Component({
  selector: 'app-root',
  template: `
  <h1> Input / output</h1>
  <input type="text" placeholder="enter stock" (change)="onChangeEvent($event)"/>
  <p><app-order [quantity]="numberOfShares" [stockSymbol]="stock" [price]="priceQuote?.lastPrice"></app-order></p>
  
  <br />

  <app-price-quoter (lastPrice)="priceQuoterHandler($event)"></app-price-quoter><br />
  <strong>
  DEntro do App Component: {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice | currency}}
  </strong>


    
  `,
  styles: []
})
export class AppComponent {
  stock:string;
  readonly numberOfShares:number = 100;

  priceQuote:PriceQuote;

  priceQuoterHandler(e:PriceQuote){
    this.priceQuote = e;
  }

  onChangeEvent({target:{value}}){
    this.stock = value;
  }


}
