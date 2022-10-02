"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Todo_1 = require("src/Todo");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.todos = [];
    }
    AppComponent.prototype.saveTodo = function () {
        if (this.newTodo) {
            var todo = new Todo_1.Todo();
            todo.name = this.newTodo;
            todo.isCompleted = true;
            this.todos.push(todo);
            this.newTodo = "";
        }
        else {
            alert("Unesi zadatak");
        }
    };
    AppComponent.prototype.done = function (id) {
        this.todos[id].isCompleted = !this.todos[id].isCompleted;
    };
    AppComponent.prototype.remove = function (id) {
        this.todos = this.todos.filter(function (v, i) { return i !== id; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
