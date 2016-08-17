import {Component} from '@angular/core';
import {Accordion} from './components/accordion/accordion';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  directives: [Accordion],
  template: `<accordion></accordion>`
})

export class App {}