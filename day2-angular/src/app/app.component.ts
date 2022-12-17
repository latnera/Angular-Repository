import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter
      [init]="counterValue"
      (countChange)="handleChange($event)"
    ></app-counter>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counterValue = 0;

  handleChange(e: any) {
    console.log('component counter value: ' + e);
  }
}
