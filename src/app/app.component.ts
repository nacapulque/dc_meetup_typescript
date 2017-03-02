import { Component } from '@angular/core';
//PASO 2
import { ToDo } from './todo';
//PASO 2

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //PASO 1

  todoList:any[] = [
  	{title:'Limpiar escritorio',createdDate: new Date(2017,2,20),endDate: new Date(2017,2,22),responsable: 'John Doe',status:'pendiente'},
  	{title:'Regar plantas',createdDate: new Date(2017,2,21),endDate: new Date(2017,2,23),responsable: 'Jane Doe',status:'completada'},
  	{title:'Ir al cine',createdDate: new Date(2017,2,22),endDate: new Date(2017,2,24),responsable: 'Mary Moe',status:'completada'},
  	{title:'Llamar a los amigos',createdDate: new Date(2017,2,23),endDate: new Date(2017,2,25),responsable: 'July Dooley',status:'pendiente'}
  	];


 //PASO 1

 //PASO 2
 	  //todoList:ToDo[] = [];
 //PASO 2

 //PASO 4
 	/*editable:ToDo;
 	edit:boolean = false;
 	createdDay:string = 'año-mes-dia';
 	endDay:string = 'año-mes-dia';
 	idxAux:number;*/
 //PASO 4

 //PASO 5
 //filterArgs:any = {activated: false,param:'pendiente'};
 //PASO 5

  constructor(){
  	//PASO 2
  	/*this.todoList = [
	 		new ToDo(1,'Limpiar escritotio',new Date(2017,2,20),new Date(2017,2,22),'John Doe','pendiente'),
	 		new ToDo(2,'Regar plantas',new Date(2017,2,21),new Date(2017,2,23),'Jane Doe','completada'),
	 		new ToDo(3,'Ir al cine',new Date(2017,2,22),new Date(2017,2,24),'Mary Moe','completada'),
	 		new ToDo(1,'Llamar a los amigos',new Date(2017,2,23),new Date(2017,2,25),'July Dooley','pendiente')
	 	];*/
	 	//PASO 2
  }

  //PASO 4
  	editTodo(todo:ToDo,idx:number){
  		this.editable = todo;
  		this.edit = true;
  		this.idxAux = idx;
  	}

  	updateTodo(todo:ToDo){
  		this.todoList[this.idxAux] = todo;
  		this.todoList[this.idxAux].createdDate = (this.createdDay != 'año-mes-dia') ? new Date(this.createdDay) : this.todoList[this.idxAux].createdDate;
  		this.todoList[this.idxAux].endDate = (this.endDay != 'año-mes-dia') ? new Date(this.endDay) : this.todoList[this.idxAux].endDate;
  		this.edit = false;
  	}
  //PASO 4


}
