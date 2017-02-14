import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  // title = 'app works!';

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  // This is a shorthand notation @see https://angular.io/docs/ts/latest/guide/dependency-injection.html
  constructor(private todoDataService: TodoDataService) { }

  // Shorthand to create a ne instance of the Todo class
  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo(); // Create the next item on the fly
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  // Service is now available as this.todoDataService
 toggleTodoComplete(todo) {
   this.todoDataService.toggleTodoComplete(todo);
 }

}
