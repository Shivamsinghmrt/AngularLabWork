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
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(mobileID, mobileName, mobileCost, mobiletype) {
        var _this = _super.call(this, mobileID, mobileName, mobileCost) || this;
        _this.mobileType = mobiletype;
        return _this;
    }
    return BasicPhone;
}(Mobile_1.MObile));
var basicphone = new BasicPhone(101, 'Nokia', 1950, 'basicphone');
basicphone.printMobileDetail(basicphone.mobileType);
