import {Component} from '@angular/core';
import {Collapse} from './components/collapse/collapse';
import * as $ from 'jquery';
import 'bootstrap';

//declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  styleUrls: [ 'app.component.css' ],
  template: `
    <h1 data-toggle="tooltip"
        data-placement="bottom"
        title="A Tooltip on the right">Angular2 components</h1>

    <collapse></collapse>
  `,
  directives: [ Collapse ]
})
export class AppComponent {
  ngAfterViewInit() {
  	$('h1').tooltip();
  }
}
