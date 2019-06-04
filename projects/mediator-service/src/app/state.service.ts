import {Injectable} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StateService{
    private state:BehaviorSubject<string> = new BehaviorSubject('');

    set searchCriteria(value:string){
        this.state.next(value);
    }

    getState(): Observable<string>{
        return this.state.asObservable();
    }
}

