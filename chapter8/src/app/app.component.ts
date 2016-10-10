import { Component } from '@angular/core';

import 'expose?jQuery!jquery';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  template: `
    <h1 data-toggle="tooltip"
        data-placement="bottom"
        title="A Tooltip on the right">Angular2 components</h1>

    <collapse></collapse>
  `,
})
export class AppComponent {
  ngAfterViewInit() {
  	$('h1').tooltip();
  }
}
