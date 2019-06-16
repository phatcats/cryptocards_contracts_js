'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContractBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _lodash = require('lodash');

var _helpers = require('./helpers');

var _globals = require('./globals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContractBase = exports.ContractBase = function () {
    function ContractBase(addressName, abi, web3provider, logger) {
        _classCallCheck(this, ContractBase);

        this.ethWeb3 = new _web2.default(web3provider);
        this.contract = null;
        this.contractAddressName = addressName;
        this.contractAbi = abi;
        this.log = logger || console.log;
    }

    _createClass(ContractBase, [{
        key: 'connectToContract',
        value: function connectToContract() {
            var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

            var address = _globals.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
            this.log('this.web3: ', this.web3);
            this.log('this.web3.eth: ', this.web3.eth);
            this.log('connecting to contract at: ', address);

            this.contract = new this.web3.eth.Contract(this.contractAbi, address);

            this.log('connected: ', this.contract.address);

            // this.contract = this.web3.eth.contract(this.contractAbi, address).at(address);
            return !_lodash._.isEmpty(this.contract.address);
        }
    }, {
        key: 'getNetworkVersion',
        value: function getNetworkVersion() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.log('getNetworkVersion called');
                _this.web3.version.getNetwork(function (err, networkVersion) {
                    if (err) {
                        reject(err);
                    } else {
                        _this.log('getNetworkVersion networkVersion = ', networkVersion);
                        resolve(networkVersion);
                    }
                });
            });
        }
    }, {
        key: 'getEventsFromContract',
        value: function getEventsFromContract(eventName, eventQuery, eventFilters) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.contract[eventName](eventQuery, eventFilters).get(function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    }, {
        key: 'callContractFn',
        value: function callContractFn(contractMethod) {
            // if (!this.account.isWeb3Ready) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
            var _fn = _helpers.CryptoCardsHelpers.promisify(this.contract[contractMethod]);

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return _fn.apply(undefined, args);
        }
    }, {
        key: 'tryContractTx',
        value: function tryContractTx(contractMethod, tx) {
            // if (!this.account.isWeb3Ready) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
            // log.verbose(contractMethod, tx, ...args);

            var _fn = _helpers.CryptoCardsHelpers.promisify(this.contract[contractMethod]);
            var promise = void 0;
            try {
                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }

                promise = _fn.apply(undefined, args.concat([tx]));
            } catch (err) {
                this.log(err);
                promise = Promise.reject(err);
            }
            return promise;
        }
    }, {
        key: 'getReceipt',
        value: function getReceipt(hash) {
            var _getTransactionReceipt = _helpers.CryptoCardsHelpers.promisify(this.web3.eth.getTransactionReceipt);
            return _getTransactionReceipt(hash);
        }
    }, {
        key: 'getTransactionReceipt',
        value: function getTransactionReceipt(hash) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                var _getReceipt = function _getReceipt() {
                    _this3.getReceipt(hash).then(function (receipt) {
                        if (receipt === null) {
                            // Try again in 1 second
                            setTimeout(function () {
                                _getReceipt();
                            }, _globals.WATCH_INTERVAL.RECEIPT);
                            return;
                        }
                        resolve(receipt);
                    }).catch(reject);
                };
                _getReceipt();
            });
        }

        // Deprecated

    }, {
        key: 'waitForReceipt',
        value: function waitForReceipt(hash, cb) {
            var _this4 = this;

            this.getReceipt(hash).then(function (receipt) {
                if (receipt !== null) {
                    // Transaction went through
                    if (cb) {
                        cb(receipt);
                    }
                } else {
                    // Try again in 1 second
                    setTimeout(function () {
                        _this4.waitForReceipt(hash, cb);
                    }, _globals.WATCH_INTERVAL.RECEIPT);
                }
            }).catch(this.log);
        }
    }, {
        key: 'web3',
        get: function get() {
            return this.ethWeb3;
        },
        set: function set(ethWeb3) {
            this.ethWeb3 = ethWeb3;
        }
    }]);

    return ContractBase;
}();