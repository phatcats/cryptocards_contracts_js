'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CC_GLOBAL = exports.CC_GLOBAL = {};

CC_GLOBAL.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
CC_GLOBAL.STARTING_BLOCK = {
    '1': 7310000, // Mainnet
    '3': 4400000, // Ropsten
    '5777': 0 // Local
};
CC_GLOBAL.MAX_LATEST_BLOCKS = 50;

CC_GLOBAL.MAX_CARD = 255;
CC_GLOBAL.MAX_CARD_TYPE = 5;
CC_GLOBAL.CARDS_IN_PACK = 8;
CC_GLOBAL.MAX_CARD_BITS = 32;
CC_GLOBAL.NUM_BASE = 10;
CC_GLOBAL.HEX_BASE = 16;
CC_GLOBAL.SPECIAL_CARD_MOD = 100; // every 100th card of that issue  (issue % 100 === 0)

CC_GLOBAL.CARD_TYPE = {
    LEGENDARY: 1,
    EPIC: 2,
    RARE: 3,
    SCARCE: 4,
    COMMON: 5
};

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
        LIB: '0xAd3c2f1b81FADCF0F7abFB5334f95780C29E5dc5',
        GUM: '0xD1f1209a7B4AF012A6B84FB0097Be309a11f678C',
        GUM_TOKEN: '0xA1166caE67923028452b207Ae886CBF1E2aB06c0',
        CARDS: '0x559cDf997162A1DbB78c748B891586691d181B95',
        CARDS_TOKEN: '0x2485592F7dD2609d12C637eb6776d99f052e06e2',
        PACKS: '0xe0AEf01e81CFE52Ea5adF2Dab886FCcfe78D467e',
        PACKS_TOKEN: '0x1730261723AE6E070299EaB630BDbf7248A0eD66',
        ORACLE: '0x0D9E9Be23b175ADD98EBD9105bbec7C5f17F00d1',
        TREASURY: '0x7955Aca7F294df4725C6cFD917593D82f87662b2',
        CONTROLLER: '0x9f07f0cAb8AaC77b3Be046a0a57680e7234F85B5'
    },

    // Ganache Private Test Network
    '5777': {
        LIB: '0xEA1b680FFda06832e8F7F67F33491e68098Aa631',
        GUM: '0x22BB50A434E82716773cFF9306c9F1D2FB65bFBC',
        GUM_TOKEN: '0xF70B61E3800dFFDA57cf167051CAa0Fb6bA1B0B3',
        CARDS: '0xfBb58f952c6e86DA1719c5257b89E6C07B78c23f',
        CARDS_TOKEN: '0x89eC3f11E1600BEd981DD2d12404bAAF21c7699c',
        PACKS: '0xA51A7dD583669a958059362dF2601197d8eE3B39',
        PACKS_TOKEN: '0x01b9707dD7782bB441ec57C1B62D669896859096',
        ORACLE: '0x0ac50fE91Df8DCe0d1968421Bb66F37F8380FF00',
        TREASURY: '0xEC0c563acbA3074B72b3365C15164cCbeCED07cB',
        CONTROLLER: '0xD215B4Ab4b63C30C1BA84887864B3d01d170bDC2'
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