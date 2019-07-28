"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsContractFactory = void 0;

var _lodash = require("lodash");

var _globals = require("./globals");

var CryptoCardsContractFactory = {
  create: function create(_ref) {
    var addressName = _ref.addressName,
        abi = _ref.abi;

    var _instance;

    var _utils;

    function _createInstance() {
      return Object.create(_lodash._.assignIn({}, CryptoCardsContractFactory.objInterface, {
        contractAddressName: addressName,
        contractAbi: abi,
        contractReady: false,
        contract: null,
        web3: null,
        log: _utils.logger || console.log
      }));
    }

    return {
      prepare: function prepare(_ref2) {
        var web3 = _ref2.web3,
            networkVersion = _ref2.networkVersion,
            logger = _ref2.logger;
        _utils = {
          web3: web3,
          networkVersion: networkVersion,
          logger: logger
        };
      },
      instance: function instance() {
        if (!_instance) {
          if (!_utils) {
            throw new Error('Instance has not been prepared!');
          }

          _instance = _createInstance();

          _instance.connectToContract(_utils);
        }

        return _instance;
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
    connectToContract: function connectToContract(_ref3) {
      var web3 = _ref3.web3,
          networkVersion = _ref3.networkVersion;
      var address = _globals.CC_GLOBAL.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
      this.web3 = web3;
      this.contract = new this.web3.eth.Contract(this.contractAbi, address);
      this.contractReady = this.contract instanceof this.web3.eth.Contract;
    },
    isReady: function isReady() {
      return this.contractReady;
    },
    getEventsFromContract: function getEventsFromContract(eventName, eventOptions) {
      return this.contract.getPastEvents(eventName, eventOptions);
    },
    callContractFn: function callContractFn(contractMethod) {
      var _this$contract$method;

      if (!this.contractReady) {
        return Promise.reject("Web3 Provider not ready (calling \"".concat(this.contractAddressName, "->").concat(contractMethod, "\")"));
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_this$contract$method = this.contract.methods)[contractMethod].apply(_this$contract$method, args).call();
    },
    tryContractTx: function tryContractTx(contractMethod, tx) {
      var _this$contract$method2;

      if (!this.contractReady) {
        return Promise.reject("Web3 Provider not ready (calling \"".concat(this.contractAddressName, "->").concat(contractMethod, "\")"));
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return (_this$contract$method2 = this.contract.methods)[contractMethod].apply(_this$contract$method2, args).send(tx);
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
              }, _globals.CC_GLOBAL.WATCH_INTERVAL.RECEIPT);
              return;
            }

            resolve(receipt);
          })["catch"](reject);
        };

        _getReceipt();
      });
    }
  }
};
exports.CryptoCardsContractFactory = CryptoCardsContractFactory;