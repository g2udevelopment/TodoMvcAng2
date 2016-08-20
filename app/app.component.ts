import { Component } from '@angular/core';
import { Todo } from './model/store';

@Component({
  selector:'todo-app',
  template: `<input placeholder="Wat moet er gebeuren?" autofocus="" [(ngModel)]="newTodoText">
              <ul class="todo-list">
              <li *ngFor="#todo of todoStore">
              <span>{{todo.title}}</span>
              </li>
            </ul>
  `
})
export class AppComponent {
  todoStore: Array<Todo>;
  newTodoText = '';

  constructor() {

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
      return this.todoStore.splice(this.todoStore.indexOf(todo),1);
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
      this.todoStore.push(new Todo(this.newTodoText));
      this.newTodoText = '';
    }
  }


}