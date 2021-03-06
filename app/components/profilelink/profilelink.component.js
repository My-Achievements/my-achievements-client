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
var Rx_1 = require('rxjs/Rx');
var ProfileService_1 = require('../../services/ProfileService/ProfileService');
var ProfileLinkComponent = (function () {
    function ProfileLinkComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.visibleList = false;
        this.profile = JSON.parse(localStorage.getItem("user"));
        Rx_1.Observable.interval(5000).subscribe(function (x) {
            _this.checkConnection();
        });
    }
    ProfileLinkComponent.prototype.changeVisibleList = function () {
        var _this = this;
        this.visibleList = !this.visibleList;
        if (this.visibleList) {
            setTimeout(function () {
                _this.visibleList = false;
            }, 3000);
        }
    };
    ProfileLinkComponent.prototype.checkConnection = function () {
        var _this = this;
        this.profileService.isConnected().subscribe(function (res) {
            if (res["message"] == true) {
                _this.profile = JSON.parse(localStorage.getItem("user"));
            }
            else {
                localStorage.removeItem("user");
                _this.profile = null;
            }
        });
    };
    ProfileLinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profileLink',
            templateUrl: "profileLink.component.html",
            providers: [ProfileService_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [ProfileService_1.ProfileService])
    ], ProfileLinkComponent);
    return ProfileLinkComponent;
}());
exports.ProfileLinkComponent = ProfileLinkComponent;
//# sourceMappingURL=profileLink.component.js.map
