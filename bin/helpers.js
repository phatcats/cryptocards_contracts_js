'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsHelpers = undefined;

var _globals = require('./globals');

// Helpers Object
var CryptoCardsHelpers = exports.CryptoCardsHelpers = {};

CryptoCardsHelpers.getContractAddress = function () {
    var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

    return _globals.CONTRACT_ADDRESS[networkVersion];
};

CryptoCardsHelpers.getTxTypeConstants = function () {
    return _globals.TX.TYPE;
};

CryptoCardsHelpers.getTxStatusConstants = function () {
    return _globals.TX.STATUS;
};

CryptoCardsHelpers.getTxEventConstants = function () {
    return _globals.TX.EVENTS;
};

CryptoCardsHelpers.getTxTypeLabels = function () {
    return _globals.TX_TYPE_LABELS;
};

CryptoCardsHelpers.promisify = function (f) {
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