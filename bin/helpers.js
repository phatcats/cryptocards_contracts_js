"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsHelpers = void 0;

var _globals = require("./globals");

var _bigInteger = _interopRequireDefault(require("big-integer"));

var math = _interopRequireWildcard(require("mathjs"));

var _lodash = require("lodash");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Helpers Object
var CryptoCardsHelpers = {}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBALS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

exports.CryptoCardsHelpers = CryptoCardsHelpers;

CryptoCardsHelpers.getContractAddress = function () {
  var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return _globals.CC_GLOBAL.CONTRACT_ADDRESS[networkVersion];
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DATE & TIME
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.date = function () {
  return new Date();
};

CryptoCardsHelpers.now = function () {
  return new Date().getTime();
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Packs & Cards
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ETHEREUM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.toBigNumber = function (value) {
  var bigmath = math.create({
    number: 'BigNumber',
    precision: _globals.CC_GLOBAL.ETHEREUM_PRECISION
  });
  return bigmath.bignumber(value);
};

CryptoCardsHelpers.fromBigNumber = function (value) {
  var bigmath = math.create({
    number: 'BigNumber',
    precision: _globals.CC_GLOBAL.ETHEREUM_PRECISION
  });
  return bigmath.divide(value, _globals.CC_GLOBAL.ETHEREUM_UNIT);
};

CryptoCardsHelpers.strFromBigint = function (value) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return (0, _bigInteger["default"])(value, base).toString(base);
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
  return (0, _bigInteger["default"])(value, base).div(_globals.CC_GLOBAL.ETHEREUM_UNIT).toString();
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
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ACCOUNT
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.fixAddress = function (address) {
  if (!_lodash._.isString(address)) {
    return address;
  }

  return _lodash._.toLower(address);
};

CryptoCardsHelpers.shortAddress = function (address) {
  if (_lodash._.isEmpty(address)) {
    return '';
  }

  return _lodash._.slice(CryptoCardsHelpers.fixAddress(address), address.length - 6).join('');
};

CryptoCardsHelpers.isAddressZero = function (address) {
  return CryptoCardsHelpers.shortAddress(address) === '000000';
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  var _parseValue = function _parseValue(value, type) {
    switch (type) {
      case 'hex':
        return web3.utils.hexToAscii(value);

      case 'eth':
        return web3.utils.fromWei(value);

      case 'address':
        return CryptoCardsHelpers.fixAddress(value);

      default:
        return value;
    }
  };

  if (!_lodash._.isArray(txData)) {
    txData = [txData];
  }

  _lodash._.forEach(txData, function (tx) {
    _lodash._.forOwn(tx, function (value, key) {
      if (_lodash._.isObject(value)) {
        CryptoCardsHelpers.normalizeTxArgs(web3, value);
        return;
      }

      if (/uuid/i.test(key)) {
        tx[key] = _parseValue(value, 'hex');
      }

      if (/owner|receiver|from/i.test(key)) {
        tx[key] = _parseValue(value, 'address');
      }

      if (_lodash._.startsWith(key, 'price')) {
        tx[key] = _parseValue(value, 'eth');
      }
    });
  });
};

CryptoCardsHelpers.findInDeep = function (obj, keyToFind) {
  if (_lodash._.has(obj, keyToFind)) {
    return obj[keyToFind];
  }

  var found;

  var keys = _lodash._.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    if (_lodash._.isObject(obj[keys[i]])) {
      found = CryptoCardsHelpers.findInDeep(obj[keys[i]], keyToFind);

      if (!_lodash._.isUndefined(found)) {
        break;
      }
    }
  }

  return found;
};

CryptoCardsHelpers.promisify = function (f) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      f.apply(void 0, args.concat([function (err, val) {
        if (err) {
          reject(err);
        } else {
          resolve(val);
        }
      }]));
    });
  };
};