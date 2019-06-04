import { Component } from '@angular/core';
import { PriceQuote } from './iprice.quote';

@Component({
  selector: 'app-root',
  template: `
  <h1> Input / output</h1>
 

  <app-price-quoter (lastPrice)="priceQuoterHandler($event)"></app-price-quoter><br />
  <strong>
  DEntro do App Component: {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice | currency}}
  </strong>


    
  `,
  styles: ['strong{background:yellow}']
})
export class AppComponent {
  

  priceQuote:PriceQuote;

  priceQuoterHandler(e:PriceQuote){
    this.priceQuote = e;
  }


}
