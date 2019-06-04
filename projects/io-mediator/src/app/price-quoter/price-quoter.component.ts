import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from '../iprice.quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  template: `
    <strong>
     DEntro do Price Quoter: {{priceQuote?.stockSymbol}} - {{priceQuote?.lastPrice | currency}}
    </strong>
  `,
  styles: [':host{background:yellowgreen}']
})
export class PriceQuoterComponent implements OnInit {
  @Output() lastPrice = new EventEmitter<PriceQuote>();
  priceQuote:PriceQuote;


  constructor() {
    interval(2000).subscribe(data => {
      this.priceQuote={stockSymbol:"AFF", lastPrice: 100*Math.random()};
      this.lastPrice.emit(this.priceQuote);
    })
   }

  ngOnInit() {
  }

}
