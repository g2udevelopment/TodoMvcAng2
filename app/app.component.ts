import { Component } from '@angular/core';
import { Todo } from './model/store';

//1: Template reference var demo.
//2: Demo binding syntax () en [] ipv. Form binding.
//3: attribute binding keyup. etc...
@Component({
  selector:'todo-app',
  template: `<input placeholder="Wat moet er gebeuren?" autofocus="" (input)="newTodoText=$event.target.value" (keyup.enter)="addTodo()">
              <ul class="todo-list">
              <li *ngFor="let todo of todoStore">
              <span>{{todo.title}}</span>
              </li>
            </ul>
  `
})
export class AppComponent {
  todoStore: Array<Todo>;
  newTodoText = '';

  constructor() {
    this.todoStore = new Array<Todo>();
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