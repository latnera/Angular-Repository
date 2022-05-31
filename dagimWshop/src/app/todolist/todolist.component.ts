import { Component, Input } from '@angular/core';
import * as uuid from 'uuid'
import { Todo } from '../Todo';
@Component({
  selector: 'app-todolist',
  template: `
    <ul >
      <li *ngFor ="let list of lists" [markDone]='list' [detail]='list' >
        {{list.text | limit }}
      </li>      
   </ul>
  `,
  styles: [
  ]
})
export class TodolistComponent{
  @Input() lists : Array<Todo> = [{id:uuid.v4(),text:'clean the room', done:false}]

}
