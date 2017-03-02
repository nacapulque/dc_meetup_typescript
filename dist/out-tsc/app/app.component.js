var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.todoList = [
            { title: 'Limpiar escritorio', createdDate: new Date(2017, 2, 20), endDate: new Date(2017, 2, 22), responsable: 'John Doe', status: 'pendiente' },
            { title: 'Regar plantas', createdDate: new Date(2017, 2, 21), endDate: new Date(2017, 2, 23), responsable: 'Jane Doe', status: 'completada' },
            { title: 'Ir al cine', createdDate: new Date(2017, 2, 22), endDate: new Date(2017, 2, 24), responsable: 'Mary Moe', status: 'completada' },
            { title: 'Llamar a los amigos', createdDate: new Date(2017, 2, 23), endDate: new Date(2017, 2, 25), responsable: 'July Dooley', status: 'pendiente' }
        ];
    }
    AppComponent.prototype.editTodo = function (todo, idx) {
        this.editable = todo;
        this.edit = true;
        this.idxAux = idx;
    };
    AppComponent.prototype.updateTodo = function (todo) {
        this.todoList[this.idxAux] = todo;
        this.todoList[this.idxAux].createdDate = (this.createdDay != 'año-mes-dia') ? new Date(this.createdDay) : this.todoList[this.idxAux].createdDate;
        this.todoList[this.idxAux].endDate = (this.endDay != 'año-mes-dia') ? new Date(this.endDay) : this.todoList[this.idxAux].endDate;
        this.edit = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map