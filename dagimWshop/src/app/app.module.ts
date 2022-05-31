import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { LimitPipe } from './limit.pipe';
import { MarkdoneDirective } from './markdone.directive';
import { ExpandPipe } from './expand.pipe';
import { DetailDirective } from './detail.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddtodoComponent,
    LimitPipe,
    MarkdoneDirective,
    ExpandPipe,
    DetailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
