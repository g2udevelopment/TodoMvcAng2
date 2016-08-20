import { Component } from '@angular/core';
import { Todo } from './model/store';
import { TodoStore } from './service/store';
//ngModel binding
//FormsModule
@Component({
  selector:'todo-app',
  providers: [TodoStore],
  template: `<input placeholder="Wat moet er gebeuren?" autofocus="" [(ngModel)]="newTodoText" (keyup.enter)="addTodo()">
              <ul class="todo-list">
              <li *ngFor="let todo of todoStore.todos">
              <span>{{todo.title}}</span>
              </li>
            </ul>
  `
})
export class AppComponent {
  todoStore: TodoStore;
  newTodoText = '';

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
  }

  toggleCompletion(todo: Todo) {
	}

	remove(todo: Todo){
	}

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }


}