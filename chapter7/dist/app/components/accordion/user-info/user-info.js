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
var UserInformation = (function () {
    function UserInformation() {
        this.fontSize = '20px';
        this.editMode = false;
    }
    UserInformation.prototype.ngOnInit = function () {
        console.log('UserInformation initialized');
    };
    UserInformation.prototype.ngOnDestroy = function () {
        console.log('UserInformation Destroy');
    };
    UserInformation.prototype.ngOnChanges = function (changes) {
        console.log('onChanges', changes);
    };
    UserInformation.prototype.getRandomNumber = function () {
        this.randomNumber = Math.floor(Math.random() * 128);
    };
    UserInformation.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
    };
    UserInformation.prototype.onSubmit = function (data) {
        Object.assign(this.user, data);
        this.editMode = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserInformation.prototype, "user", void 0);
    UserInformation = __decorate([
        core_1.Component({
            selector: 'user-info',
            encapsulation: core_1.ViewEncapsulation.Native,
            styleUrls: ['app/components/accordion/user-info/user-info.css'],
            templateUrl: 'app/components/accordion/user-info/user-info.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserInformation);
    return UserInformation;
}());
exports.UserInformation = UserInformation;
//# sourceMappingURL=user-info.js.map