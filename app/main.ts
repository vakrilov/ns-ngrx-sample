// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {provideStore, Middleware, usePreMiddleware, usePostMiddleware} from '@ngrx/store';
import {counter} from './counter';
// import "rxjs/operator/do";
import "rxjs/add/operator/do";

const actionLog : Middleware = action => {
    return action.do(val => {
        console.log('DISPATCHED ACTION: ' + JSON.stringify(val));
    });
};

const stateLog : Middleware = state => {
    return state.do(val => {
        console.log('NEW STATE: ' + JSON.stringify(val));
    });
};

nativeScriptBootstrap(AppComponent, [
    provideStore({counter}, {counter: 0}),
    usePreMiddleware(actionLog),
    usePostMiddleware(stateLog)]);