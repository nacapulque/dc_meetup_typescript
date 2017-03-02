import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './todo';

@Pipe({name: 'statusFilter',pure: false})
export class StatusFilter implements PipeTransform {
  transform(todos: Array<ToDo>, params: any): Array<ToDo> {
    return todos.filter(todo => {
    	if(!params.activated){
    		return true;
    	}else{
    		return todo.status == params.param;
    	}
    });
  }
}