import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-amazon',
  template: `
    <div class="amazon">
      <h2>AMAZON</h2>
      <p>Search:{{searchObs$ | async}}</p>
    </div>
  `,
  styles: ['.amazon{background:green}']
})
export class AmazonComponent implements OnInit {

  searchObs$:Observable<string>;

  constructor(private state:StateService) { 
    this.searchObs$= state.getState();
  }

  ngOnInit() {
  }

}
