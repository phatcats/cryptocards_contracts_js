"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsTraits = void 0;

var _bigInteger = _interopRequireDefault(require("big-integer"));

var _ = _interopRequireWildcard(require("lodash"));

var _global = require("./global");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CryptoCardsTraits =
/*#__PURE__*/
function () {
  function CryptoCardsTraits() {
    _classCallCheck(this, CryptoCardsTraits);
  }

  _createClass(CryptoCardsTraits, null, [{
    key: "combineTraits",
    value: function combineTraits(traits) {
      return _.reduce(traits, function (sum, n) {
        return sum.or(n);
      }, (0, _bigInteger["default"])(0));
    }
  }, {
    key: "hasTrait",
    value: function hasTrait(traits, trait) {
      return traits.and(trait).eq(trait);
    }
  }, {
    key: "toString",
    value: function toString(traits) {
      return (0, _bigInteger["default"])(traits).toString(_global.CC_GLOBAL.NUM_BASE);
    }
  }]);

  return CryptoCardsTraits;
}(); //
// Trait Definitions
//
// Major Features


exports.CryptoCardsTraits = CryptoCardsTraits;
CryptoCardsTraits.FOUNDERS_TOKEN = (0, _bigInteger["default"])(1).shiftLeft(0);
CryptoCardsTraits.GLITCH_CARD = (0, _bigInteger["default"])(1).shiftLeft(1);
CryptoCardsTraits.REVERSED_THEME = (0, _bigInteger["default"])(1).shiftLeft(14);
CryptoCardsTraits.FOR_TESTING = (0, _bigInteger["default"])(1).shiftLeft(75); // Badges

CryptoCardsTraits.WRAPPED_ETHER = (0, _bigInteger["default"])(1).shiftLeft(20);
CryptoCardsTraits.COMBINED_CARD = (0, _bigInteger["default"])(1).shiftLeft(21);