'use strict';
exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        var result = keys.filter(function (property) {
            return (property in this);
        });
        return result.length === keys.length;
    };
    Object.prototype.checkHasValueType = function (key, type) {
        return this[key] == type(this[key]);
    };    
    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };
    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };
};
