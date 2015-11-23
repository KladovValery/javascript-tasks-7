'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (keys.length !== Object.keys(this).length) {
            return false;
        }
        var self = this;
        var result = keys.filter(function (property) {
            return (property in self);
        });
        return result.length === keys.length;
    };
    Object.prototype.checkHasKeys = function (keys) {
        var ownProperty = [];
        for (var property in this) {
            ownProperty.push(property);
        }
        var result = ownProperty.filter(function (property) {
            return keys.indexOf(property) != -1;
        });
        return result.length === keys.length;
    };
    Object.prototype.checkContainsValues = function (values) {
        var ownValues = [];
        for (var key in this) {
            ownValues.push(this[key]);
        }
        var result = values.filter(function (value) {
            return ownValues.indexOf(value) != -1;
        });
        return result.length === values.length;
    };
    Object.prototype.checkHasValues = function (values) {
        var ownValues = [];
        var self = this;
        var keys = Object.keys(this);
        keys.forEach(function (key) {
            ownValues.push(self[key]);
        });
        var result = ownValues.filter(function (value) {
            return values.indexOf(value) > -1;
        });
        return result.length === values.length;
    };
    Object.prototype.checkHasValueType = function (key, type) {
        var self = this;
        switch (type) {
            case String: return typeof self[key] === 'string';
            case Number: return typeof self[key] === 'number';
            case Function: return typeof self[key] === 'function';
            default:
                return Object.getPrototypeOf(self[key]) === Array.prototype;
        }
    };
    Array.prototype.checkHasLength = String.prototype.checkHasLength = function (length) {
        return this.length === length;
    };
    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };
    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };
};
