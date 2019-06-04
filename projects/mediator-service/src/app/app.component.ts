import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Mediator Service
      </h1>      
    </div>
    <section>
      <h2>App Component</h2>
      <app-search></app-search>
      <a [routerLink]="['/']"> ebay </a>
      <a [routerLink]="['/amazon']"> Amazon </a>
    </section>

    <router-outlet></router-outlet>
  `,
  styles: ['section{background:yellowgreen}']
})
export class AppComponent {
  title = 'mediator-service';
}
