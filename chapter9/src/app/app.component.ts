import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 text-marker="red">Angular2 components</h1>
    <input type="checkbox" [(ngModel)]="condition">
    <p *onlyIf="condition">
      This content will shown only if te condition is true
    </p>
  `
})
export class AppComponent {
  title = 'app works!';
}
