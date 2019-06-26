'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CryptoCardsHelpers = exports.CryptoCardsLib = exports.CryptoCardsGum = exports.CryptoCardsCards = exports.CryptoCardsPacks = exports.CryptoCardsOracle = exports.CryptoCardsTreasury = exports.CryptoCardsController = undefined;

require('babel-polyfill');

var _helpers = require('./helpers');

var _cryptoCardsContractFactory = require('./crypto-cards-contract-factory');

var _cryptoCardsController = require('./crypto-cards-controller.abi');

var _cryptoCardsTreasury = require('./crypto-cards-treasury.abi');

var _cryptoCardsOracle = require('./crypto-cards-oracle.abi');

var _cryptoCardsPacks = require('./crypto-cards-packs.abi');

var _cryptoCardsCards = require('./crypto-cards-cards.abi');

var _cryptoCardsGum = require('./crypto-cards-gum.abi');

var _cryptoCardsLib = require('./crypto-cards-lib.abi');

var CryptoCardsController = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'CONTROLLER', abi: _cryptoCardsController.CryptoCardsControllerABI });
var CryptoCardsTreasury = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'TREASURY', abi: _cryptoCardsTreasury.CryptoCardsTreasuryABI });
var CryptoCardsOracle = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'ORACLE', abi: _cryptoCardsOracle.CryptoCardsOracleABI });
var CryptoCardsPacks = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'PACKS', abi: _cryptoCardsPacks.CryptoCardsPacksABI });
var CryptoCardsCards = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'CARDS', abi: _cryptoCardsCards.CryptoCardsCardsABI });
var CryptoCardsGum = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'GUM', abi: _cryptoCardsGum.CryptoCardsGumABI });
var CryptoCardsLib = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'LIB', abi: _cryptoCardsLib.CryptoCardsLibABI });

exports.CryptoCardsController = CryptoCardsController;
exports.CryptoCardsTreasury = CryptoCardsTreasury;
exports.CryptoCardsOracle = CryptoCardsOracle;
exports.CryptoCardsPacks = CryptoCardsPacks;
exports.CryptoCardsCards = CryptoCardsCards;
exports.CryptoCardsGum = CryptoCardsGum;
exports.CryptoCardsLib = CryptoCardsLib;
exports.CryptoCardsHelpers = _helpers.CryptoCardsHelpers;