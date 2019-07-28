"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsParser = void 0;

var _bigInteger = _interopRequireDefault(require("big-integer"));

var _lodash = require("lodash");

var _globals = require("./globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
BIT-MAP:
      E       G    I   R   G  Y
      22      10   12  10  6  4
[____________|___|____|___|__|_]


22 bits for (max 4,194,304)
	- wrapped ether (divided by 1,000,000)
         4194304 / 1000000 = 4.194304
		   10000 / 1000000 = 0.01
		       1 / 1000000 = 0.000001

10 bits for  (max 1,024)
	- wrapped gum

12 bits for  (max 4,096)
	- card issue

10 bits for  (max 1,024)
	- card rank

6 bits for  (max 64)
	- current generation

4 bits for (max 16)
	- year of issue (0 = 2019)
 */
var CryptoCardsParser = {};
exports.CryptoCardsParser = CryptoCardsParser;

CryptoCardsParser.readBits = function (num, from, len) {
  var mask = (0, _bigInteger["default"])(1).shiftLeft(len).minus(1).shiftLeft(from);
  return num.and(mask).shiftRight(from);
};

CryptoCardsParser.parseCard = function (cardHash) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.HEX_BASE;
  var cardInt = (0, _bigInteger["default"])(cardHash, base);
  var year = CryptoCardsParser.readBits(cardInt, 0, 4).toJSNumber();
  var gen = CryptoCardsParser.readBits(cardInt, 4, 6).toJSNumber();
  var rank = CryptoCardsParser.readBits(cardInt, 10, 10).toJSNumber();
  var issue = CryptoCardsParser.readBits(cardInt, 20, 12).toJSNumber();
  var gum = CryptoCardsParser.readBits(cardInt, 32, 10).toJSNumber();
  var eth = CryptoCardsParser.readBits(cardInt, 42, 22).toJSNumber();
  return {
    year: year,
    gen: gen,
    rank: rank,
    issue: issue,
    gum: gum,
    eth: eth
  };
};

CryptoCardsParser.parsePack = function (packHash) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.HEX_BASE;
  var packedCards = packHash.replace(/^0\./, '').split('.');
  var pack = [];

  for (var i = 0; i < _globals.CC_GLOBAL.CARDS_IN_PACK; i++) {
    pack.push(CryptoCardsParser.parseCard(packedCards[i], base));
  }

  return pack;
};

CryptoCardsParser.serializeCard = function (cardData) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.HEX_BASE;
  return CryptoCardsParser._getCardAsIntStr(_lodash._.assignIn({
    base: base
  }, cardData));
}; // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsParser._getCardAsIntStr = function (_ref) {
  var _ref$year = _ref.year,
      year = _ref$year === void 0 ? 0 : _ref$year,
      _ref$gen = _ref.gen,
      gen = _ref$gen === void 0 ? 1 : _ref$gen,
      rank = _ref.rank,
      issue = _ref.issue,
      _ref$gum = _ref.gum,
      gum = _ref$gum === void 0 ? 0 : _ref$gum,
      _ref$eth = _ref.eth,
      eth = _ref$eth === void 0 ? 0 : _ref$eth,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? _globals.CC_GLOBAL.HEX_BASE : _ref$base;
  //
  // From Solidity Contract:
  //      (bits[0] | (bits[1] << 4) | (bits[2] << 10) | (bits[3] << 20) | (bits[4] << 32) | (bits[5] << 42);
  //
  var cardInt = (0, _bigInteger["default"])(year);
  cardInt = cardInt.or((0, _bigInteger["default"])(gen).shiftLeft(4));
  cardInt = cardInt.or((0, _bigInteger["default"])(rank).shiftLeft(10));
  cardInt = cardInt.or((0, _bigInteger["default"])(issue).shiftLeft(20));
  cardInt = cardInt.or((0, _bigInteger["default"])(gum).shiftLeft(32));
  cardInt = cardInt.or((0, _bigInteger["default"])(eth).shiftLeft(42));
  return cardInt.toString(base);
};

CryptoCardsParser._getPackStr = function (packData) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _globals.CC_GLOBAL.HEX_BASE;
  var pack = [];

  for (var i = 0; i < _globals.CC_GLOBAL.CARDS_IN_PACK; i++) {
    pack.push(CryptoCardsParser._getCardAsIntStr(_lodash._.assignIn({
      base: base
    }, packData[i])));
  }

  return pack.join('.');
};