'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsTreasury = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _contractBase = require('./contract-base');

var _cryptoCardsTreasury = require('./crypto-cards-treasury.abi');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CryptoCardsTreasury = exports.CryptoCardsTreasury = function (_ContractBase) {
    _inherits(CryptoCardsTreasury, _ContractBase);

    function CryptoCardsTreasury(_ref) {
        var web3provider = _ref.web3provider,
            logger = _ref.logger;

        _classCallCheck(this, CryptoCardsTreasury);

        return _possibleConstructorReturn(this, (CryptoCardsTreasury.__proto__ || Object.getPrototypeOf(CryptoCardsTreasury)).call(this, 'TREASURY', _cryptoCardsTreasury.CryptoCardsTreasuryABI, web3provider, logger));
    }

    _createClass(CryptoCardsTreasury, null, [{
        key: 'instance',
        value: function instance() {
            return CryptoCardsTreasury._instance;
        }
    }, {
        key: 'initialize',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                var web3provider = _ref2.web3provider,
                    networkVersion = _ref2.networkVersion,
                    logger = _ref2.logger;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!CryptoCardsTreasury._instance) {
                                    CryptoCardsTreasury._instance = new CryptoCardsTreasury({ web3provider: web3provider, logger: logger });
                                }
                                return _context.abrupt('return', CryptoCardsTreasury._instance.connectToContract(networkVersion));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function initialize(_x) {
                return _ref3.apply(this, arguments);
            }

            return initialize;
        }()
    }]);

    return CryptoCardsTreasury;
}(_contractBase.ContractBase);
//
// Static Member Variables
//


CryptoCardsTreasury._instance = null; // Static Instance Member for Singleton Pattern