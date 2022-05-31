import { Component} from '@angular/core';
import * as uuid from 'uuid'
import { Todo } from './Todo';
@Component({
  selector: 'app-root',
  template: `
    <button (click)="action({list: true, add: false})">List To Do</button>
    <button (click)="action({list: false, add: true })">Add To Do </button>
    <app-todolist *ngIf='screens.list' [lists]='lists'></app-todolist>
    <app-addtodo *ngIf='screens.add' [lists]='lists' [screens]="screens"></app-addtodo>
  `,
  styles: []
})
export class AppComponent {
  lists: Array<Todo> = [{ id: uuid.v4(), text: "Scan your room before start the exam", done: false }]
  screens = {list: true, add: false}
  action(obj:ReturnType<typeof Object>) { 
    this.screens= obj
  }
}
