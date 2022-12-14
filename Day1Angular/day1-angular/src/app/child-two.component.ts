import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-two',
  template: ` <p>{{ name }}</p> `,
  styles: [],
})
export class ChildTwoComponent implements OnInit {
  public name: string;
  constructor() {
    this.name = 'My name is ChildTwo comp';
  }

  ngOnInit(): void {}
}
