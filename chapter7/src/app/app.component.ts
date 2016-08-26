import {Component} from '@angular/core';
import {Accordion} from './components/accordion/accordion';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  directives: [Accordion],
  template: `<accordion></accordion>`
})

export class AppComponent {}
