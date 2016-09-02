import {
    Component, ViewEncapsulation,
    Input, Output, EventEmitter
}  from '@angular/core';


@Component({
  selector: 'accordion-tab',
  //encapsulation: ViewEncapsulation.Native,
  styles: [`
  .accordion-tab {
   width: 500px;
   border: 1px solid black;
   border-collapse: collapse;
  }
  .accordion-heading {
   padding: 5px;
   background-color: lightblue;
   cursor: pointer;
  }
 `],
  template: `
  <div class="accordion-tab">
   <div class="accordion-heading" (click)="toggleContent()">{{title}}</div>
   <div>
    <ng-content *ngIf="extended"></ng-content>
   </div>
  </div>
  `
})

export class AccordionTab {
  @Input()  extended;
  @Input()  title;
  @Output() toggle = new EventEmitter();

  toggleContent() {
    this.toggle.next(null)
  }
}
