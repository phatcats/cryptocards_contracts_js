'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CC_GLOBAL = exports.CC_GLOBAL = {};

CC_GLOBAL.ETHEREUM_UNIT = 1e18;
CC_GLOBAL.ETHEREUM_PRECISION = 18;

CC_GLOBAL.WATCH_INTERVAL = {
    ACCOUNT: 3000,
    RECEIPT: 3000,
    PENDING: 30000
};

CC_GLOBAL.CONTRACT_ADDRESS = {
    // Main Network
    '1': {
        LIB: '',
        GUM: '',
        GUM_TOKEN: '',
        CARDS: '',
        CARDS_TOKEN: '',
        PACKS: '',
        PACKS_TOKEN: '',
        ORACLE: '',
        TREASURY: '',
        CONTROLLER: ''
    },

    // Ropsten Test Network
    '3': {
        LIB: '0xa17e36a031f1a0c8a8c72b9fede7fb75edfd0e76',
        GUM: '0x8436160925b6825fe5115235f0728192b889906c',
        GUM_TOKEN: '0x7434024d5Df994722684f9cf712a14D0D4D284eb',
        CARDS: '0xa2c2d1ef7e820e8fdaadca667a48a0efe835374b',
        CARDS_TOKEN: '0x4A43f5Ec87236bD411Ee425C8B818568a2a38012',
        PACKS: '0x674c8341687df2240171a9f7bfd6e0c8bc1244b2',
        PACKS_TOKEN: '0xC31301AE9EE15482d8E8647bD8418A6125597Af6',
        ORACLE: '0xb1a140f34888f7df103f2f5962ea348cd06f6ac6',
        TREASURY: '0x72944e6480d394194e7db9f929cbce891a29da03',
        CONTROLLER: '0xbd6dbce43a2dccf31b52c5805a1e75c747c8d823'
    },

    // Ganache Private Test Network
    '5777': {
        LIB: '',
        GUM: '',
        GUM_TOKEN: '',
        CARDS: '',
        CARDS_TOKEN: '',
        PACKS: '',
        PACKS_TOKEN: '',
        ORACLE: '',
        TREASURY: '',
        CONTROLLER: ''
    }
};

CC_GLOBAL.TX = {
    TYPE: {
        BUY_NEW_PACK: 1,
        RECEIVED_NEW_PACK: 2,

        BUY_OLD_PACK: 3,
        RECEIVED_OLD_PACK: 4,

        OPEN_PACK: 5,
        OPENED_PACK: 6,

        SET_CARD_PRICE: 7,
        CARD_PRICE_SET: 8,

        BUY_CARD: 9,
        CARD_SOLD: 10,

        SET_CARD_TRADE: 11,
        CARD_TRADE_SET: 12,

        TRADE_CARD: 13,
        CARD_TRADED: 14
    },
    STATUS: {
        PENDING: 1,
        CONFIRMED: 2,
        REMOVED: 3,
        FAILED: 4,
        POSTED: 5
    },
    EVENTS: {
        BUY_NEW_PACK: 'BuyNewPack',
        RECEIVED_NEW_PACK: 'ReceivedNewPack',
        OPENED_PACK: 'OpenedPack',
        PACK_ERROR: 'PackError',

        PACK_PRICE_SET: 'PackPriceSet',
        CARD_PRICE_SET: 'CardPriceSet',
        CARD_TRADE_SET: 'CardTradeValueSet',

        PACK_SOLD: 'PackSale',
        CARD_SOLD: 'CardSale',
        CARD_TRADED: 'CardTrade'
    }
};

CC_GLOBAL.TX_TYPE_LABELS = ['', 'Buy New Pack', '', 'Buy Existing Pack', '', 'Open Pack', 'Opened Pack', 'Set Card Price', '', 'Buy Card', 'Card Sold', 'Set Card Trade Value', '', 'Trade Card', 'Card Received from Trade'];