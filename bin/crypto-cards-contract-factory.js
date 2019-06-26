'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsContractFactory = undefined;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _lodash = require('lodash');

var _globals = require('./globals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CryptoCardsContractFactory = exports.CryptoCardsContractFactory = {
    create: function create(_ref) {
        var addressName = _ref.addressName,
            abi = _ref.abi;

        return {
            __instance: null,
            instance: function instance(_ref2) {
                var web3provider = _ref2.web3provider,
                    networkVersion = _ref2.networkVersion,
                    logger = _ref2.logger;

                if (!this.__instance) {
                    this.__instance = Object.create(_lodash._.assignIn({}, this.objInterface, {
                        contractAddressName: addressName,
                        contractAbi: abi,
                        web3: new _web2.default(web3provider),
                        log: logger || console.log,
                        isProviderReady: false,
                        contract: null
                    }));
                    this.__instance.connectToContract(networkVersion);
                }
                return this.__instance;
            }
        };
    },


    objInterface: {
        getNetworkVersion: function getNetworkVersion() {
            return this.web3.eth.net.getId();
        },
        getNetworkType: function getNetworkType() {
            return this.web3.eth.net.getNetworkType();
        },
        getNetworkPeerCount: function getNetworkPeerCount() {
            return this.web3.eth.net.getPeerCount();
        },
        connectToContract: function connectToContract() {
            var networkVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

            var address = _globals.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
            this.contract = new this.web3.eth.Contract(this.contractAbi, address);
            this.isProviderReady = !_lodash._.isEmpty(this.contract.address);
        },
        getEventsFromContract: function getEventsFromContract(eventName, eventOptions) {
            return this.contract.getPastEvents(eventName, eventOptions);
        },
        callContractFn: function callContractFn(contractMethod) {
            var _contract$methods;

            if (!this.isProviderReady) {
                return Promise.reject('Web3 Provider not ready (calling "' + this.contractAddressName + '->' + contractMethod + '")');
            }

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_contract$methods = this.contract.methods)[contractMethod].apply(_contract$methods, _toConsumableArray(args)).call();
        },
        tryContractTx: function tryContractTx(contractMethod, tx) {
            var _contract$methods2;

            if (!this.isProviderReady) {
                return Promise.reject('Web3 Provider not ready (calling "' + this.contractAddressName + '->' + contractMethod + '")');
            }

            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            return (_contract$methods2 = this.contract.methods)[contractMethod].apply(_contract$methods2, _toConsumableArray(args)).send(tx);
        },
        getReceipt: function getReceipt(hash) {
            return this.web3.eth.getTransactionReceipt(hash);
        },
        getTransactionReceipt: function getTransactionReceipt(hash) {
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
    }
};