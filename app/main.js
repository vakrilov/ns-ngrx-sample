"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var store_1 = require('@ngrx/store');
var counter_1 = require('./counter');
// import "rxjs/operator/do";
require("rxjs/add/operator/do");
var actionLog = function (action) {
    return action.do(function (val) {
        console.log('DISPATCHED ACTION: ' + JSON.stringify(val));
    });
};
var stateLog = function (state) {
    return state.do(function (val) {
        console.log('NEW STATE: ' + JSON.stringify(val));
    });
};
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    store_1.provideStore({ counter: counter_1.counter }, { counter: 0 }),
    store_1.usePreMiddleware(actionLog),
    store_1.usePostMiddleware(stateLog)]);
//# sourceMappingURL=main.js.map