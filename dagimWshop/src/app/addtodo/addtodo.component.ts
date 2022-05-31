import { Component, Input } from '@angular/core';
import * as uuid from 'uuid'
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  template: `
  <p>
    <input placeholder="Insert your Todo-list here" #item />
    <button (click)="addToList(item.value)" >Add To list</button>
  </p>
  `,
  styles: [
  ]
})
export class AddtodoComponent  {
  @Input() lists: Array<Todo> = []
  @Input() screens: { list: boolean, add: boolean } = { list: false, add: true}

  addToList(text:string) { 
    this.lists.push({
      id: uuid.v4(),
      text,
      done: false
    }      
    )
  this.screens.list = true;
  this.screens.add = false
  }
}
