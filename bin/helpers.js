'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsHelpers = undefined;

var _globals = require('./globals');

var _bigInteger = require('big-integer');

var _bigInteger2 = _interopRequireDefault(_bigInteger);

var _mathjs = require('mathjs');

var math = _interopRequireWildcard(_mathjs);

var _lodash = require('lodash');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers Object
var CryptoCardsHelpers = exports.CryptoCardsHelpers = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBALS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.getContractAddress = function () {
    var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

    return _globals.CC_GLOBAL.CONTRACT_ADDRESS[networkVersion];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DATE & TIME
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.date = function () {
    return new Date();
};
CryptoCardsHelpers.now = function () {
    return new Date().getTime();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ETHEREUM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.toBigNumber = function (value) {
    var bigmath = math.create({ number: 'BigNumber', precision: _globals.CC_GLOBAL.ETHEREUM_PRECISION });
    return bigmath.bignumber(value);
};
CryptoCardsHelpers.fromBigNumber = function (value) {
    var bigmath = math.create({ number: 'BigNumber', precision: _globals.CC_GLOBAL.ETHEREUM_PRECISION });
    return bigmath.divide(value, _globals.CC_GLOBAL.ETHEREUM_UNIT);
};

CryptoCardsHelpers.strFromBigint = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return (0, _bigInteger2.default)(value, base).toString(base);
};
CryptoCardsHelpers.intFromBigint = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return _lodash._.parseInt(CryptoCardsHelpers.strFromBigint(value, base), base);
};
CryptoCardsHelpers.floatFromBigint = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return parseFloat(CryptoCardsHelpers.strFromBigint(value, base));
};

CryptoCardsHelpers.fromEtherToString = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return (0, _bigInteger2.default)(value, base).div(_globals.CC_GLOBAL.ETHEREUM_UNIT).toString();
};
CryptoCardsHelpers.fromEtherToInt = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return _lodash._.parseInt(CryptoCardsHelpers.fromEtherToString(value, base), base);
};
CryptoCardsHelpers.fromEtherToFloat = function (value) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    return parseFloat(CryptoCardsHelpers.fromEtherToString(value, base));
};

CryptoCardsHelpers.upperCaseAddress = function (address) {
    if (!_lodash._.isString(address)) {
        return address;
    }
    return address.toUpperCase().replace(/^0X/i, '0x');
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TRANSACTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.normalizeTxType = function (txData, eventType) {
    _lodash._.forEach(txData, function (tx) {
        if (!tx.type || tx.type === 'mined') {
            tx.type = eventType;
        }
    });
};

CryptoCardsHelpers.normalizeTxArgs = function (web3, txData) {
    var _parseValue = function _parseValue(value) {
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        console.log('_parseValue', key, value);
        if (_lodash._.isObject(value) && value instanceof web3.BigNumber) {
            console.log(' is a BigNumber');
            if (_lodash._.startsWith(key, 'price')) {
                console.log(' is a Price');
                return CryptoCardsHelpers.strFromBigint(value);
            }
            return CryptoCardsHelpers.intFromBigint(value);
        } else if (_lodash._.isString(value) && _lodash._.startsWith(value, '0x')) {
            console.log(' is a HexValue');
            if (web3.isAddress(value)) {
                console.log(' is an Address');
                return value; // CryptoCardsHelpers.upperCaseAddress(value);
            }
            return web3.toAscii(value);
        }
        return value;
    };

    var _iterateObjects = function _iterateObjects(arrayOfObjects) {
        if (!_lodash._.isArray(arrayOfObjects)) {
            arrayOfObjects = [arrayOfObjects];
        }
        _lodash._.forEach(arrayOfObjects, function (obj) {
            _lodash._.forOwn(obj, function (value, key) {
                if (_lodash._.isPlainObject(value)) {
                    _iterateObjects(value);
                } else if (_lodash._.isArray(value)) {
                    obj[key] = _lodash._.map(value, function (v) {
                        return _parseValue(v, key);
                    });
                } else {
                    obj[key] = _parseValue(value, key);
                }
            });
        });
    };

    _iterateObjects(txData);
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