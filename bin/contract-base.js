'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContractBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _lodash = require('lodash');

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
        this.providerReady = false;
    }

    _createClass(ContractBase, [{
        key: 'getNetworkVersion',
        value: function getNetworkVersion() {
            return this.web3.eth.net.getId();
        }
    }, {
        key: 'getNetworkType',
        value: function getNetworkType() {
            return this.web3.eth.net.getNetworkType();
        }
    }, {
        key: 'getNetworkPeerCount',
        value: function getNetworkPeerCount() {
            return this.web3.eth.net.getPeerCount();
        }
    }, {
        key: 'connectToContract',
        value: function connectToContract() {
            var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

            var address = _globals.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
            this.contract = new this.web3.eth.Contract(this.contractAbi, address);
            this.isProviderReady = !_lodash._.isEmpty(this.contract.address);
            return this.isProviderReady;
        }
    }, {
        key: 'getEventsFromContract',
        value: function getEventsFromContract(eventName, eventOptions) {
            return this.contract.getPastEvents(eventName, eventOptions);
        }
    }, {
        key: 'callContractFn',
        value: function callContractFn(contractMethod) {
            var _contract$methods;

            if (!this.isProviderReady) {
                return Promise.reject('Web3 Provider not ready (calling "' + contractMethod + '")');
            }

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_contract$methods = this.contract.methods)[contractMethod].apply(_contract$methods, args).call();
        }
    }, {
        key: 'tryContractTx',
        value: function tryContractTx(contractMethod, tx) {
            var _contract$methods2;

            if (!this.isProviderReady) {
                return Promise.reject('Web3 Provider not ready (calling "' + contractMethod + '")');
            }

            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            return (_contract$methods2 = this.contract.methods)[contractMethod].apply(_contract$methods2, args).send(tx);
        }
    }, {
        key: 'getReceipt',
        value: function getReceipt(hash) {
            return this.web3.eth.getTransactionReceipt(hash);
        }
    }, {
        key: 'getTransactionReceipt',
        value: function getTransactionReceipt(hash) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var _getReceipt = function _getReceipt() {
                    _this.getReceipt(hash).then(function (receipt) {
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
    }, {
        key: 'web3',
        get: function get() {
            return this.ethWeb3;
        },
        set: function set(ethWeb3) {
            this.ethWeb3 = ethWeb3;
        }
    }, {
        key: 'isProviderReady',
        get: function get() {
            return this.providerReady;
        },
        set: function set(ready) {
            this.providerReady = ready;
        }
    }]);

    return ContractBase;
}();