'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _helpers = require('./helpers');

var _contractBase = require('./contract-base');

var _cryptoCardsController = require('./crypto-cards-controller.abi');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ICryptoCardsController = function (_ContractBase) {
    _inherits(_ICryptoCardsController, _ContractBase);

    function _ICryptoCardsController(web3, logger) {
        _classCallCheck(this, _ICryptoCardsController);

        return _possibleConstructorReturn(this, (_ICryptoCardsController.__proto__ || Object.getPrototypeOf(_ICryptoCardsController)).call(this, 'CONTROLLER', _cryptoCardsController.CryptoCardsControllerABI, web3, logger));
    }

    _createClass(_ICryptoCardsController, [{
        key: 'getPromoCode',
        value: function getPromoCode(codeIndex) {
            // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
            var _fn = _helpers.CryptoCardsHelpers.promisify(this.contract.getPromoCode);
            return _fn(codeIndex);
        }
    }, {
        key: 'getPrice',
        value: function getPrice(generation) {
            // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
            var _fn = _helpers.CryptoCardsHelpers.promisify(this.contract.getPrice);
            return _fn(generation);
        }
    }]);

    return _ICryptoCardsController;
}(_contractBase.ContractBase);

var CryptoCardsController = exports.CryptoCardsController = function (_ICryptoCardsControll) {
    _inherits(CryptoCardsController, _ICryptoCardsControll);

    function CryptoCardsController(web3, logger) {
        _classCallCheck(this, CryptoCardsController);

        var _this2 = _possibleConstructorReturn(this, (CryptoCardsController.__proto__ || Object.getPrototypeOf(CryptoCardsController)).call(this, web3, logger));

        logger('CryptoCardsController created');
        return _this2;
    }

    _createClass(CryptoCardsController, null, [{
        key: 'instance',
        value: function instance() {
            if (!CryptoCardsController._instance) {
                CryptoCardsController._instance = new CryptoCardsController();
            }
            return CryptoCardsController._instance;
        }
    }]);

    return CryptoCardsController;
}(_ICryptoCardsController);
//
// Static Member Variables
//


CryptoCardsController._instance = null; // Static Instance Member for Singleton Pattern