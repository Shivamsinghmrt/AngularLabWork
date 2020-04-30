"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mobile_1 = require("../file1/Mobile");
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(mobileID, mobileName, mobileCost, mobiletype) {
        var _this = _super.call(this, mobileID, mobileName, mobileCost) || this;
        _this.mobileType = mobiletype;
        return _this;
    }
    return SmartPhone;
}(Mobile_1.MObile));
var smartphone = new SmartPhone(202, 'Samsung', 6950, 'smartphone');
console.log(smartphone.mobileType);
console.log(smartphone.mobileID);
console.log(smartphone.mobileCost);
console.log(smartphone.mobileName);
