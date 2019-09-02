"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsHelpers = void 0;

var _bigInteger = _interopRequireDefault(require("big-integer"));

var math = _interopRequireWildcard(require("mathjs"));

var _lodash = require("lodash");

var _cardTraits = require("./card-traits");

var _parser = require("./parser");

var _globals = require("./globals");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
};

CryptoCardsHelpers.delay =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(time) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              setTimeout(resolve, time);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Packs & Cards
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.getCardDataByRank = function (_ref2) {
  var _ref2$year = _ref2.year,
      year = _ref2$year === void 0 ? 0 : _ref2$year,
      _ref2$gen = _ref2.gen,
      gen = _ref2$gen === void 0 ? 1 : _ref2$gen,
      rank = _ref2.rank,
      _ref2$combined = _ref2.combined,
      combined = _ref2$combined === void 0 ? 0 : _ref2$combined,
      _ref2$special = _ref2.special,
      special = _ref2$special === void 0 ? 0 : _ref2$special,
      issue = _ref2.issue,
      _ref2$gum = _ref2.gum,
      gum = _ref2$gum === void 0 ? 0 : _ref2$gum,
      _ref2$eth = _ref2.eth,
      eth = _ref2$eth === void 0 ? 0 : _ref2$eth,
      _ref2$traits = _ref2.traits,
      traits = _ref2$traits === void 0 ? 0 : _ref2$traits;
  issue = !_lodash._.isNumber(issue) || issue < 1 ? _lodash._.random(10, 2000) : issue;
  return _parser.CryptoCardsParser.serializeCard({
    year: year,
    gen: gen,
    rank: rank,
    combined: combined,
    special: special,
    issue: issue,
    gum: gum,
    eth: eth,
    traits: traits
  });
};

CryptoCardsHelpers.getCardTypeByRank = function (rank) {
  var type = 0;

  for (; type < _globals.CC_GLOBAL.CARD_TYPE_RANGES.length; type++) {
    if (rank < _globals.CC_GLOBAL.CARD_TYPE_RANGES[type]) {
      break;
    }
  } // 1 = Legendary
  // 2 = Epic
  // 3 = Rare
  // 4 = Scarce
  // 5 = Common


  return type + 1;
};

CryptoCardsHelpers.isCardSpecialIssue = function (issue) {
  return issue === 1 || issue % _globals.CC_GLOBAL.SPECIAL_CARD_MOD === 0;
};

CryptoCardsHelpers.getCardTypeMax = function (cardType) {
  var typeIdx = _lodash._.parseInt(cardType, _globals.CC_GLOBAL.NUM_BASE) - 1;

  if (typeIdx === 0) {
    return _globals.CC_GLOBAL.CARD_TYPE_RANGES[typeIdx];
  }

  return _globals.CC_GLOBAL.CARD_TYPE_RANGES[typeIdx] - _globals.CC_GLOBAL.CARD_TYPE_RANGES[typeIdx - 1];
};

CryptoCardsHelpers.getCardTypeLabel = function (cardType) {
  return _lodash._.capitalize(_lodash._.keys(_globals.CC_GLOBAL.CARD_TYPE)[cardType - 1]);
};

CryptoCardsHelpers.findCombinableCards = function (_ref3) {
  var ownerCards = _ref3.ownerCards,
      sourceCard = _ref3.sourceCard,
      _ref3$includePacked = _ref3.includePacked,
      includePacked = _ref3$includePacked === void 0 ? false : _ref3$includePacked;
  var combinableCards = [];

  _lodash._.forEach(ownerCards, function (ownerCard) {
    if (ownerCard.cardId === sourceCard.cardId) {
      return;
    }

    if (ownerCard.gen < 1) {
      return;
    }

    if (!includePacked && !!ownerCard.packed) {
      return;
    }

    var conditions = [ownerCard.year === sourceCard.year, ownerCard.gen === sourceCard.gen, ownerCard.rank === sourceCard.rank];

    if (_lodash._.every(conditions, Boolean)) {
      combinableCards.push(ownerCard);
    }
  });

  return {
    combinableCards: combinableCards
  };
};

CryptoCardsHelpers.generateCombinedCard = function (_ref4) {
  var sourceCard = _ref4.sourceCard,
      combineCard = _ref4.combineCard,
      cardIssue = _ref4.cardIssue;
  var fields = ['cardType', 'year', 'gen', 'rank', 'issue', 'combined', 'gum', 'eth', 'traits', 'specialty'];

  var resultCard = _lodash._.assignIn({}, _lodash._.pick(sourceCard, fields)); // Reduce Generation


  resultCard.gen -= 1; // Get Issue of New Card

  resultCard.issue = cardIssue + 1; // Combine Gum/Eth

  resultCard.gum += combineCard.gum;
  resultCard.eth += combineCard.eth; // Track Combined Count

  resultCard.combined += combineCard.combined + 1; // Combine Traits

  var traits = [_cardTraits.CryptoCardsTraits.toTraits(sourceCard.traits), _cardTraits.CryptoCardsTraits.toTraits(combineCard.traits)];
  resultCard.traits = _cardTraits.CryptoCardsTraits.combineTraits(traits).toString(_globals.CC_GLOBAL.NUM_BASE);
  return resultCard;
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.NUM_BASE;
  return (0, _bigInteger["default"])(value, base).toString(base);
};

CryptoCardsHelpers.intFromBigint = function (value) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.NUM_BASE;
  return _lodash._.parseInt(CryptoCardsHelpers.strFromBigint(value, base), base);
};

CryptoCardsHelpers.floatFromBigint = function (value) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.NUM_BASE;
  return parseFloat(CryptoCardsHelpers.strFromBigint(value, base));
};

CryptoCardsHelpers.hexToBigIntStr = function (value) {
  return (0, _bigInteger["default"])(value, _globals.CC_GLOBAL.HEX_BASE).toString(_globals.CC_GLOBAL.NUM_BASE);
};

CryptoCardsHelpers.bigIntToHexStr = function (value) {
  return (0, _bigInteger["default"])(value, _globals.CC_GLOBAL.NUM_BASE).toString(_globals.CC_GLOBAL.HEX_BASE);
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
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Miscellaneous
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


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