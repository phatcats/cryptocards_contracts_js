"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


// Helpers Object
var Helpers = exports.Helpers = {};

Helpers.promisify = function (f) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
            f.apply(undefined, args.concat([function (err, val) {
                if (err) {
                    reject(err);
                } else {
                    resolve(val);
                }
            }]));
        });
    };
};