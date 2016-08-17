import {Component, ViewEncapsulation, AfterViewInit, ElementRef} from '@angular/core';

declare var $: any;

@Component({
  selector: 'collapse',
  styleUrls: [ 'app/components/collapse/collapse.css' ],
  templateUrl: 'app/components/collapse/collapse.html'
})

export class Collapse implements AfterViewInit {
  constructor(element:ElementRef) {
  	$(element.nativeElement)
        .on('show.bs.collapse', ()=> console.log('handle show event'));

    $(element.nativeElement)
        .on('hide.bs.collapse', ()=> console.log('handle hide event'));
  }

  ngAfterViewInit() {
    $('.collapse').collapse();
  }
}