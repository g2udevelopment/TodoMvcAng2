import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from './model/store';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todo-item.html'
})
export class TodoItem {
  @Input() todo: Todo;
  @Output() itemCompleteToggled = new EventEmitter<Todo>();
  @Output() itemRemoved = new EventEmitter<Todo>();

  stopEditing(editedTitle: string) {
    this.todo.title = editedTitle;
    this.todo.editing = false;
  }

  cancelEditingTodo() {
    this.todo.editing = false;
  }

  editTodo() {
    this.todo.editing = true;
  }

  updateEditingTodo(editedTitle: string) {
    editedTitle = editedTitle.trim();
    this.todo.editing = false;

    if (editedTitle.length === 0) {
      return this.remove();
    }

    this.todo.title = editedTitle;
  }

  remove() {
    this.itemRemoved.emit(this.todo);
  }

  toggleCompletion() {
    this.itemCompleteToggled.emit(this.todo);
  }
}