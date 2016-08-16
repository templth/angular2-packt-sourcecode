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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var accordion_tab_1 = require('./accordion-tab');
var user_info_1 = require('./user-info/user-info');
var Accordion = (function () {
    function Accordion(http) {
        var _this = this;
        this.http = http;
        this.activeUserId = 0;
        this.http.get('/app/server/users.json')
            .map(function (result) { return result.json(); })
            .subscribe(function (result) { return _this.users = result; });
    }
    Accordion.prototype.isActive = function (user) {
        return user.id === this.activeUserId;
    };
    Accordion.prototype.fetchData = function () {
        var _this = this;
        this.http.get('/app/server/other-users.json')
            .map(function (result) { return result.json(); })
            .subscribe(function (result) { return _this.users = result; });
    };
    Accordion.prototype.toggle = function (user) {
        this.isActive(user) ?
            this.activeUserId = 0 : this.activeUserId = user.id;
    };
    Accordion = __decorate([
        core_1.Component({
            selector: 'accordion',
            encapsulation: core_1.ViewEncapsulation.Native,
            directives: [accordion_tab_1.AccordionTab, user_info_1.UserInformation],
            providers: [http_1.HTTP_PROVIDERS],
            template: "\n  <div>\n   <button (click)=\"fetchData()\">update data</button>\n   <accordion-tab *ngFor=\"let user of users\"\n                  (toggle)=\"toggle(user)\"\n                  [extended]=\"isActive(user)\"\n                  [title]=\"user.name\">\n                 <user-info [user]=\"user\"></user-info>\n    </accordion-tab>\n  </div>"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Accordion);
    return Accordion;
}());
exports.Accordion = Accordion;
//# sourceMappingURL=accordion.js.map