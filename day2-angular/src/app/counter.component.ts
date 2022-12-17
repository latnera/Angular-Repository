import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="counterPlus()">PLUS</button>
    <p>{{ init }}</p>
    <button (click)="counterMinus()">MINUS</button>
  `,
  styles: [],
})
export class CounterComponent implements OnInit {
  @Input() init: any;

  @Output() countChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  counterPlus() {
    this.init = this.init + 1;
    this.countChange.emit(this.init);
  }

  counterMinus() {
    this.init = this.init - 1;
    this.countChange.emit(this.init);
  }
}
