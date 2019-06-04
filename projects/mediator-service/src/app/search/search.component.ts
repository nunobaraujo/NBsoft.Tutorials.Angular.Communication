import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StateService } from '../state.service';
import {  debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
  <p>
    <input type="text" placeholder="enter criteria" [formControl]="searchInput" />
  </p>
  `,
  styles: []
})
export class SearchComponent implements OnInit {
  searchInput:FormControl  = new FormControl('');
  
  constructor(private state:StateService){ 
    this.searchInput.valueChanges
    .pipe(debounceTime(300))
    .subscribe(
        searchValue => this.state.searchCriteria = searchValue
    );
  }

  ngOnInit() {
  }

}
