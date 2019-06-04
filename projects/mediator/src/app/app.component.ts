import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>BehaviourSubject & Subject example</h1>
    
  `,
  styles: []
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    console.log('onInit--------');

    let random1$ = Observable.create(ob => ob.next(Math.random()));

    let observer1 = random1$.subscribe(arg => console.log('Obs1 :', arg));
    let observer2 = random1$.subscribe(arg => console.log('Obs2 :', arg));
    
    console.log('----------BehaviourSubject----------');

    // O que é o zero no construtor
    let random2$ = new BehaviorSubject(0);
    random2$.next(Math.random());
    
    let observerB1 = random2$.subscribe(arg => console.log('Obs2 - 1 :', arg));
    let observerB2 = random2$.subscribe(arg => console.log('Obs2 - 2:', arg));

    random2$.next(Math.random());


    console.log('----------Subject----------');
    let subject = new Subject();
    subject.next('a');

    subject.subscribe(val => console.log('object :', val));

    subject.next('b');


    console.log('----------BehaviourSubject----------');
    let behaviourSubject = new BehaviorSubject('a');
    behaviourSubject.next('a');

    behaviourSubject.subscribe(val => console.log('object :', val));

    behaviourSubject.next('b');

  }
  
}
