import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/service/todos/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos?: Array<ToDo>;

  constructor(private readonly _todosService: TodosService) {
    this._todosService.getAllTodos().then((todos) => {
      this.todos = (todos.data as {todos: Array<ToDo>}).todos;
    })
  }

}
