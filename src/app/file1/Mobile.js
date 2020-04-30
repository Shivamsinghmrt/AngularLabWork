"use strict";
exports.__esModule = true;
var MObile = /** @class */ (function () {
    function MObile(mobileID, mobileName, mobileCost) {
        this.mobileID = mobileID;
        this.mobileCost = mobileCost;
        this.mobileName = mobileName;
    }
    MObile.prototype.printMobileDetail = function (mobileType) {
        console.log(this.mobileID);
        console.log(this.mobileName);
        console.log(this.mobileCost);
        console.log(mobileType);
    };
    return MObile;
}());
exports.MObile = MObile;
