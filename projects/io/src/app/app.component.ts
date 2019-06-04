import { Component } from '@angular/core';
import { PriceQuote } from './iprice.quote';

@Component({
  selector: 'app-root',
  template: `
  <h1> Input / output</h1>
  <input type="text" placeholder="enter stock" (change)="onChangeEvent($event)"/>
  <p><app-order [quantity]="numberOfShares" [stockSymbol]="stock"></app-order></p>
  
    
  `,
  styles: []
})
export class AppComponent {
  stock:string;
  readonly numberOfShares:number = 100;

  onChangeEvent({target:{value}}){
    this.stock = value;
  }


}
