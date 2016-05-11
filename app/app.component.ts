import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';

// import { NSLogMonitor } from "./ns-log-monitor/log-monitor"
import { DevToolsSlideOut } from "./ns-log-monitor/dev-tools-slide-out"

interface AppState {
    counter: number;
}


@Component({
    selector: "my-app",
    directives: [DevToolsSlideOut],
    template: `
    <GridLayout>
        <StackLayout class="app">
            <button text="+" (tap)="increment()">Increment</button>
            <label [text]="counter | async"></label>
            <button text="-" (tap)="decrement()">Decrement</button>
        </StackLayout>
        
        <dev-tools-slide-out></dev-tools-slide-out>
    </GridLayout>`,
    styles: [`
        button, label, stack-layout {
            horizontal-align: center;    
            vertical-align: center;
        }
        
        label {
            font-size: 32;
            margin: 8;
        }
        
        button {
            font-size: 38;
        }
        
        .app {
            vertical-align: top;
            margin: 40;
            orientation: horizontal;
        }
    `]
})
export class AppComponent {
    counter: Observable<number>;
    constructor(public store: Store<AppState>) {
        this.counter = <Observable<number>>store.select('counter');
    }
    increment() {
        this.store.dispatch({ type: INCREMENT });
    }
    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }
    reset() {
        this.store.dispatch({ type: RESET });
    }
}
