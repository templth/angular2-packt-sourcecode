"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AccordionTab = (function () {
    function AccordionTab() {
        this.toggle = new core_1.EventEmitter();
    }
    AccordionTab.prototype.toggleContent = function () {
        this.toggle.next(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AccordionTab.prototype, "extended", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AccordionTab.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AccordionTab.prototype, "toggle", void 0);
    AccordionTab = __decorate([
        core_1.Component({
            selector: 'accordion-tab',
            encapsulation: core_1.ViewEncapsulation.Native,
            styles: ["\n  .accordion-tab {\n   width: 500px;\n   border: 1px solid black;\n   border-collapse: collapse;\n  }\n  .accordion-heading {\n   padding: 5px;\n   background-color: lightblue;\n   cursor: pointer;\n  }\n "],
            template: "\n  <div class=\"accordion-tab\">\n   <div class=\"accordion-heading\" (click)=\"toggleContent()\">{{title}}</div>\n   <div>\n    <content *ngIf=\"extended\"></content>\n   </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionTab);
    return AccordionTab;
}());
exports.AccordionTab = AccordionTab;
//# sourceMappingURL=accordion-tab.js.map