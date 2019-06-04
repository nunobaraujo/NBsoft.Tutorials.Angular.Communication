import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ebay',
  template: `
    <div class="ebay">
      <h2>EBAY</h2>
      <p>Search:{{searchObs$ | async}}</p>
    </div>
  `,
  styles: ['.ebay{background:orange}']
})
export class EbayComponent implements OnInit {

  searchObs$:Observable<string>;

  constructor(private state:StateService) { 
    this.searchObs$= state.getState();
  }

  ngOnInit() {
  }

}