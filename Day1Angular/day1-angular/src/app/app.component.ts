import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>AppComponent Children👇</h1>
    <app-child-one></app-child-one>
    <app-child-two></app-child-two> `,
  styles: [``],
})
export class AppComponent {
  title = 'day1-angular';
}
