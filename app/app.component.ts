import { Component, ViewChild, Renderer } from '@angular/core';
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

  constructor(todoStore: TodoStore, private _renderer:Renderer) {
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