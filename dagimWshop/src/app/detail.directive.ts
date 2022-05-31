import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Todo } from './Todo';

@Directive({
  selector: '[detail]'
})
export class DetailDirective {

  @Input('detail') list!: Todo;
  @HostBinding('list') seemore !: string
  @HostListener('mouseenter') detail() {
    return this.list
  }
  constructor() { }

}
