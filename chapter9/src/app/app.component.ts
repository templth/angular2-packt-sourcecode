import {Component}  from '@angular/core';
import {bootstrap}  from '@angular/platform-browser-dynamic';
import {TextMarker} from './text-marker';
import {OnlyIf} from './only-if';

@Component({
  selector: 'app-root',
  directives: [TextMarker, OnlyIf],
  template: `
    <h1 text-marker="red">Angular2 components</h1>
    <input type="checkbox" [(ngModel)]="condition">
    <p *onlyIf="condition">
      This content will shown only if te condition is true
    </p>
    `
})

export class AppComponent {}