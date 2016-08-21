import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyAutoFocus } from './directive/autofocus';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyAutoFocus],
  bootstrap: [AppComponent]
})
export class AppModule {}