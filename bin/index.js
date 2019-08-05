"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CC_GLOBAL", {
  enumerable: true,
  get: function get() {
    return _globals.CC_GLOBAL;
  }
});
Object.defineProperty(exports, "CryptoCardsHelpers", {
  enumerable: true,
  get: function get() {
    return _helpers.CryptoCardsHelpers;
  }
});
Object.defineProperty(exports, "CryptoCardsTraits", {
  enumerable: true,
  get: function get() {
    return _cardTraits.CryptoCardsTraits;
  }
});
Object.defineProperty(exports, "CryptoCardsParser", {
  enumerable: true,
  get: function get() {
    return _parser.CryptoCardsParser;
  }
});
exports.CryptoCardsLib = exports.CryptoCardsGumToken = exports.CryptoCardsGum = exports.CryptoCardsCardsToken = exports.CryptoCardsCards = exports.CryptoCardsPacksToken = exports.CryptoCardsPacks = exports.CryptoCardsOracle = exports.CryptoCardsTreasury = exports.CryptoCardsController = void 0;

var _globals = require("./globals");

var _helpers = require("./helpers");

var _cardTraits = require("./card-traits");

var _parser = require("./parser");

var _cryptoCardsContractFactory = require("./crypto-cards-contract-factory");

var _cryptoCardsController = require("./abi/crypto-cards-controller.abi");

var _cryptoCardsTreasury = require("./abi/crypto-cards-treasury.abi");

var _cryptoCardsOracle = require("./abi/crypto-cards-oracle.abi");

var _cryptoCardsPacks = require("./abi/crypto-cards-packs.abi");

var _cryptoCardsPacksToken = require("./abi/crypto-cards-packs-token.abi");

var _cryptoCardsCards = require("./abi/crypto-cards-cards.abi");

var _cryptoCardsCardsToken = require("./abi/crypto-cards-cards-token.abi");

var _cryptoCardsGum = require("./abi/crypto-cards-gum.abi");

var _cryptoCardsGumToken = require("./abi/crypto-cards-gum-token.abi");

var _cryptoCardsLib = require("./abi/crypto-cards-lib.abi");

var CryptoCardsController = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'CONTROLLER',
  abi: _cryptoCardsController.CryptoCardsControllerABI
});

exports.CryptoCardsController = CryptoCardsController;

var CryptoCardsTreasury = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'TREASURY',
  abi: _cryptoCardsTreasury.CryptoCardsTreasuryABI
});

exports.CryptoCardsTreasury = CryptoCardsTreasury;

var CryptoCardsOracle = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'ORACLE',
  abi: _cryptoCardsOracle.CryptoCardsOracleABI
});

exports.CryptoCardsOracle = CryptoCardsOracle;

var CryptoCardsPacks = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'PACKS',
  abi: _cryptoCardsPacks.CryptoCardsPacksABI
});

exports.CryptoCardsPacks = CryptoCardsPacks;

var CryptoCardsPacksToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'PACKS_TOKEN',
  abi: _cryptoCardsPacksToken.CryptoCardsPacksTokenABI
});

exports.CryptoCardsPacksToken = CryptoCardsPacksToken;

var CryptoCardsCards = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'CARDS',
  abi: _cryptoCardsCards.CryptoCardsCardsABI
});

exports.CryptoCardsCards = CryptoCardsCards;

var CryptoCardsCardsToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'CARDS_TOKEN',
  abi: _cryptoCardsCardsToken.CryptoCardsCardsTokenABI
});

exports.CryptoCardsCardsToken = CryptoCardsCardsToken;

var CryptoCardsGum = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'GUM',
  abi: _cryptoCardsGum.CryptoCardsGumABI
});

exports.CryptoCardsGum = CryptoCardsGum;

var CryptoCardsGumToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'GUM_TOKEN',
  abi: _cryptoCardsGumToken.CryptoCardsGumTokenABI
});

exports.CryptoCardsGumToken = CryptoCardsGumToken;

var CryptoCardsLib = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({
  addressName: 'LIB',
  abi: _cryptoCardsLib.CryptoCardsLibABI
});

exports.CryptoCardsLib = CryptoCardsLib;