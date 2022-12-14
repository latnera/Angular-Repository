import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: ` <p>{{ name }}</p> `,
  styles: [
    `
      p {
        color: #037d50;
        font-size: 32px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ChildOneComponent implements OnInit {
  public name: string;
  constructor() {
    this.name = 'My name is ChildOne comp';
  }

  ngOnInit(): void {}
}
