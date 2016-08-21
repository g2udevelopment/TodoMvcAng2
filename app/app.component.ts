import { Component } from '@angular/core';
import { Todo } from './model/store';
import { TodoStore } from './service/store';
//ngModel binding
//FormsModule
@Component({
  selector:'todo-app',
  providers: [TodoStore],
  templateUrl: 'app/app.html'
})
export class AppComponent {
  todoStore: TodoStore;
  newTodoText = '';

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
	}

	remove(todo: Todo){
    this.todoStore.remove(todo);
	}

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }


}