"use strict";
var core_1 = require("@angular/core");
var store_1 = require('@ngrx/store');
var counter_1 = require('./counter');
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    AppComponent.prototype.increment = function () {
        this.store.dispatch({ type: counter_1.INCREMENT });
    };
    AppComponent.prototype.decrement = function () {
        this.store.dispatch({ type: counter_1.DECREMENT });
    };
    AppComponent.prototype.reset = function () {
        this.store.dispatch({ type: counter_1.RESET });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<StackLayout orientation=\"horizontal\">\n    <button text=\"+\" (tap)=\"increment()\">Increment</button>\n    <label [text]=\"counter | async\"></label>\n    <button text=\"-\" (tap)=\"decrement()\">Decrement</button>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map