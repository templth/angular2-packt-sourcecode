import { Component, ViewEncapsulation } from '@angular/core';
import { Collapse } from './components/collapse/collapse';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: [ 'index.css' ],
  template: `
    <h1 data-toggle="tooltip"
        data-placement="bottom"
        title="A Tooltip on the right">Angular2 components</h1>

    <collapse></collapse>
  `,
  directives: [ Collapse ]
})
export class App {
  ngAfterViewInit() {
  	$('h1').tooltip();
  }
}
