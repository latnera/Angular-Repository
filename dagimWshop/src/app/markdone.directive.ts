import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Todo } from './Todo';

@Directive({
  selector: '[markDone]'
})
export class MarkdoneDirective {
  style = {  
    'color' : 'pink',
    'fontStyle': 'italic',
    'textDecoration': 'line-through lightgray',
  }
  @Input('markDone') list!: Todo;
  @HostBinding('style') decoration!: {}
  @HostListener('dblclick') completed() { 
    this.list.done = !this.list.done
    this.list.done? this.decoration = this.style : this.decoration = ''
  }
  constructor() { }

}
