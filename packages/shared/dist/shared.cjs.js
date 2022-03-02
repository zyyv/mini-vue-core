'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// src/base/index.ts
var toTypeString = (v) => Object.prototype.toString.call(v);
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isObject = (val) => val !== null && typeof val === "object";
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => val instanceof Date;
var isSymbol = (val) => typeof val === "symbol";
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
UA && /msie|trident/.test(UA);
UA && UA.indexOf("msie 9.0") > 0;
var isEdge = UA && UA.indexOf("edge/") > 0;
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
UA && UA.match(/firefox\/(\d+)/);
var extend = Object.assign;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => {
  if (val == null)
    return false;
  return hasOwnProperty.call(val, key);
};

// src/function/index.ts
var noop = () => {
};

const isIntegerKey = (key) => isString(key)
    && key !== 'NaN'
    && key[0] !== '-'
    && `${parseInt(key, 10)}` === key;
const hasChanged = (value, oldValue) => value !== oldValue;
const objectToString = Object.prototype.toString;
const warn = console.warn;

exports.NOOP = noop;
exports.extend = extend;
exports.hasChanged = hasChanged;
exports.hasOwn = hasOwn;
exports.isArray = isArray;
exports.isDate = isDate;
exports.isFunction = isFunction;
exports.isIntegerKey = isIntegerKey;
exports.isMap = isMap;
exports.isObject = isObject;
exports.isSet = isSet;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.objectToString = objectToString;
exports.toTypeString = toTypeString;
exports.warn = warn;
//# sourceMappingURL=shared.cjs.js.map
