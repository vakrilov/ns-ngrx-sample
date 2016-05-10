import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';

interface AppState {
  counter: number;
}


@Component({
    selector: "my-app",
    template: `
<StackLayout orientation="horizontal">
    <button text="+" (tap)="increment()">Increment</button>
    <label [text]="counter | async"></label>
    <button text="-" (tap)="decrement()">Decrement</button>
</StackLayout>
`,
})
export class AppComponent {
    counter: Observable<number>;
    constructor(public store: Store<AppState>){
        this.counter = <Observable<number>>store.select('counter');
    }
    increment(){
        this.store.dispatch({ type: INCREMENT });
    }
    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }
    reset(){
        this.store.dispatch({ type: RESET });
    }
}
