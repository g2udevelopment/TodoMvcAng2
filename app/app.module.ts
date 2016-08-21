import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoItem } from './todo-item.component';
import { MyAutoFocus } from './directive/autofocus';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyAutoFocus, TodoItem],
  bootstrap: [AppComponent]
})
export class AppModule {}