"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsHelpers = void 0;

var _bigInteger = _interopRequireDefault(require("big-integer"));

var _lodash = require("lodash");

var _cardTraits = require("./card-traits");

var _parser = require("./parser");

var _globals = require("./globals");

var _mathjs = require("mathjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as math from 'mathjs';
var mathConfig = {
  number: 'BigNumber'
}; // , precision: CC_GLOBAL.ETHEREUM_PRECISION };

var bigmath = (0, _mathjs.create)(_mathjs.all, mathConfig); // Helpers Object

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

CryptoCardsHelpers.delay = function (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Packs & Cards
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.getCardDataByRank = function (_ref) {
  var _ref$year = _ref.year,
      year = _ref$year === void 0 ? 0 : _ref$year,
      _ref$gen = _ref.gen,
      gen = _ref$gen === void 0 ? 1 : _ref$gen,
      rank = _ref.rank,
      _ref$combined = _ref.combined,
      combined = _ref$combined === void 0 ? 0 : _ref$combined,
      _ref$special = _ref.special,
      special = _ref$special === void 0 ? 0 : _ref$special,
      issue = _ref.issue,
      _ref$gum = _ref.gum,
      gum = _ref$gum === void 0 ? 0 : _ref$gum,
      _ref$eth = _ref.eth,
      eth = _ref$eth === void 0 ? 0 : _ref$eth,
      _ref$traits = _ref.traits,
      traits = _ref$traits === void 0 ? 0 : _ref$traits;
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

  for (; type < _globals.CC_GLOBAL.CARD_TYPE_RANGE.length; type++) {
    if (rank < _globals.CC_GLOBAL.CARD_TYPE_RANGE[type]) {
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
    return _globals.CC_GLOBAL.CARD_TYPE_RANGE[typeIdx];
  }

  return _globals.CC_GLOBAL.CARD_TYPE_RANGE[typeIdx] - _globals.CC_GLOBAL.CARD_TYPE_RANGE[typeIdx - 1];
};

CryptoCardsHelpers.getCardTypeLabel = function (cardType) {
  return _lodash._.capitalize(_lodash._.keys(_globals.CC_GLOBAL.CARD_TYPE)[cardType]);
};

CryptoCardsHelpers.findCombinableCards = function (_ref2) {
  var ownerCards = _ref2.ownerCards,
      sourceCard = _ref2.sourceCard,
      _ref2$includePacked = _ref2.includePacked,
      includePacked = _ref2$includePacked === void 0 ? false : _ref2$includePacked;
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

CryptoCardsHelpers.generateCombinedCard = function (_ref3) {
  var sourceCard = _ref3.sourceCard,
      combineCard = _ref3.combineCard,
      cardIssue = _ref3.cardIssue;
  var fields = ['cardType', 'year', 'gen', 'rank', 'issue', 'combined', 'gum', 'eth', 'traits', 'specialty'];

  var resultCard = _lodash._.assignIn({}, _lodash._.pick(sourceCard, fields));

  resultCard.gen -= 1;
  resultCard.issue = cardIssue;
  resultCard.gum += combineCard.gum;
  resultCard.eth += combineCard.eth;
  resultCard.combined += combineCard.combined + 1;
  var traits = [_cardTraits.CryptoCardsTraits.toTraits(sourceCard.traits), _cardTraits.CryptoCardsTraits.toTraits(combineCard.traits)];
  resultCard.traits = _cardTraits.CryptoCardsTraits.combineTraits(traits).toString(_globals.CC_GLOBAL.NUM_BASE);
  return resultCard;
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ETHEREUM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.toBigNumber = function (value) {
  // const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
  return bigmath.bignumber(value);
};

CryptoCardsHelpers.fromBigNumber = function (value) {
  // const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
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