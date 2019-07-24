'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CC_GLOBAL = exports.CryptoCardsParser = exports.CryptoCardsHelpers = exports.CryptoCardsLib = exports.CryptoCardsGumToken = exports.CryptoCardsGum = exports.CryptoCardsCardsToken = exports.CryptoCardsCards = exports.CryptoCardsPacksToken = exports.CryptoCardsPacks = exports.CryptoCardsOracle = exports.CryptoCardsTreasury = exports.CryptoCardsController = undefined;

require('babel-polyfill');

var _globals = require('./globals');

var _helpers = require('./helpers');

var _parser = require('./parser');

var _cryptoCardsContractFactory = require('./crypto-cards-contract-factory');

var _cryptoCardsController = require('./abi/crypto-cards-controller.abi');

var _cryptoCardsTreasury = require('./abi/crypto-cards-treasury.abi');

var _cryptoCardsOracle = require('./abi/crypto-cards-oracle.abi');

var _cryptoCardsPacks = require('./abi/crypto-cards-packs.abi');

var _cryptoCardsPacksToken = require('./abi/crypto-cards-packs-token.abi');

var _cryptoCardsCards = require('./abi/crypto-cards-cards.abi');

var _cryptoCardsCardsToken = require('./abi/crypto-cards-cards-token.abi');

var _cryptoCardsGum = require('./abi/crypto-cards-gum.abi');

var _cryptoCardsGumToken = require('./abi/crypto-cards-gum-token.abi');

var _cryptoCardsLib = require('./abi/crypto-cards-lib.abi');

var CryptoCardsController = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'CONTROLLER', abi: _cryptoCardsController.CryptoCardsControllerABI });
var CryptoCardsTreasury = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'TREASURY', abi: _cryptoCardsTreasury.CryptoCardsTreasuryABI });
var CryptoCardsOracle = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'ORACLE', abi: _cryptoCardsOracle.CryptoCardsOracleABI });
var CryptoCardsPacks = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'PACKS', abi: _cryptoCardsPacks.CryptoCardsPacksABI });
var CryptoCardsPacksToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'PACKS_TOKEN', abi: _cryptoCardsPacksToken.CryptoCardsPacksTokenABI });
var CryptoCardsCards = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'CARDS', abi: _cryptoCardsCards.CryptoCardsCardsABI });
var CryptoCardsCardsToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'CARDS_TOKEN', abi: _cryptoCardsCardsToken.CryptoCardsCardsTokenABI });
var CryptoCardsGum = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'GUM', abi: _cryptoCardsGum.CryptoCardsGumABI });
var CryptoCardsGumToken = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'GUM_TOKEN', abi: _cryptoCardsGumToken.CryptoCardsGumTokenABI });
var CryptoCardsLib = _cryptoCardsContractFactory.CryptoCardsContractFactory.create({ addressName: 'LIB', abi: _cryptoCardsLib.CryptoCardsLibABI });

exports.CryptoCardsController = CryptoCardsController;
exports.CryptoCardsTreasury = CryptoCardsTreasury;
exports.CryptoCardsOracle = CryptoCardsOracle;
exports.CryptoCardsPacks = CryptoCardsPacks;
exports.CryptoCardsPacksToken = CryptoCardsPacksToken;
exports.CryptoCardsCards = CryptoCardsCards;
exports.CryptoCardsCardsToken = CryptoCardsCardsToken;
exports.CryptoCardsGum = CryptoCardsGum;
exports.CryptoCardsGumToken = CryptoCardsGumToken;
exports.CryptoCardsLib = CryptoCardsLib;
exports.CryptoCardsHelpers = _helpers.CryptoCardsHelpers;
exports.CryptoCardsParser = _parser.CryptoCardsParser;
exports.CC_GLOBAL = _globals.CC_GLOBAL;