
export const CC_GLOBAL = {};

CC_GLOBAL.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
CC_GLOBAL.PUBLIC_ADDRESS_LENGTH = 42;
CC_GLOBAL.STARTING_BLOCK = {
    '1'    : 7310000, // Mainnet
    '3'    : 4400000, // Ropsten
    '5777' : 0        // Local
};
CC_GLOBAL.MAX_LATEST_BLOCKS = 50;

CC_GLOBAL.BASE_YEAR         = 2019;
CC_GLOBAL.MAX_CARD          = 255;
CC_GLOBAL.MAX_CARD_TYPE     = 5;
CC_GLOBAL.CARDS_IN_PACK     = 8;
CC_GLOBAL.MAX_CARD_BITS     = 32;
CC_GLOBAL.NUM_BASE          = 10;
CC_GLOBAL.HEX_BASE          = 16;
CC_GLOBAL.SPECIAL_CARD_MOD  = 100; // every 100th card of that issue  (issue % 100 === 0)
CC_GLOBAL.SPECIAL_CARD_RANK = (1 << 16) - 1;

CC_GLOBAL.CARD_TYPE = {
    LEGENDARY : 1,
    EPIC      : 2,
    RARE      : 3,
    SCARCE    : 4,
    COMMON    : 5
};
CC_GLOBAL.CARD_TYPE_RANGE = [10, 48, 96, 160, 256];
CC_GLOBAL.CARD_TYPE_RANGES = [
    [0, 9],
    [10, 47],
    [48, 95],
    [96, 159],
    [160, 255]
];

CC_GLOBAL.PACK_PRICE_DISCOUNT =  [5, 10, 15, 0]; // % off base price

CC_GLOBAL.ETHEREUM_UNIT = 1e18;
CC_GLOBAL.ETHEREUM_PRECISION = 18;
CC_GLOBAL.WRAPPED_ETH_MULT = 1000000;

CC_GLOBAL.WATCH_INTERVAL = {
    ACCOUNT :  3000,
    RECEIPT :  3000,
    PENDING : 30000
};

CC_GLOBAL.CONTRACT_ADDRESS = {
    // Main Network
    '1' : {
        LIB         : '',
        GUM         : '',
        GUM_TOKEN   : '',
        CARDS       : '',
        CARDS_TOKEN : '',
        PACKS       : '',
        PACKS_TOKEN : '',
        ORACLE      : '',
        TREASURY    : '',
        CONTROLLER  : ''
    },

    // Ropsten Test Network
    '3' : {
        LIB         : '0xA8dCAaBBDc2114129fa2A1C212E579Fe01Ec458f',
        GUM         : '0x7Ea4EDEE5347DFF0e63dA01F325FF67aA044e828',
        GUM_TOKEN   : '0x867b09c898157A91989D088aCEa9253958A29Bb8',
        CARDS       : '0x0956db35a22e014E71Cc73F310c49BeB42665c82',
        CARDS_TOKEN : '0x75A6bB3Fe8411cC656839A49712981E25B631c7e',
        PACKS       : '0xF3B77547AFB0CeaECC102C3955D375626f24A873',
        PACKS_TOKEN : '0x6E0ae149050115306eBA371F81843d4541a8A30F',
        ORACLE      : '0xf80360e4152B300f5FBF18c8C35880918E87AF0D',
        TREASURY    : '0xEe2b5b4a4eE219623c18a89b6Dda44D5Ac59af3E',
        CONTROLLER  : '0x6B7875E7e434a57f7340b292fFed22d453d80CC4'
    },

    // Ganache Private Test Network
    '5777' : {
        LIB         : '0xEA1b680FFda06832e8F7F67F33491e68098Aa631',
        GUM         : '0x22BB50A434E82716773cFF9306c9F1D2FB65bFBC',
        GUM_TOKEN   : '0xF70B61E3800dFFDA57cf167051CAa0Fb6bA1B0B3',
        CARDS       : '0xfBb58f952c6e86DA1719c5257b89E6C07B78c23f',
        CARDS_TOKEN : '0x89eC3f11E1600BEd981DD2d12404bAAF21c7699c',
        PACKS       : '0xA51A7dD583669a958059362dF2601197d8eE3B39',
        PACKS_TOKEN : '0x01b9707dD7782bB441ec57C1B62D669896859096',
        ORACLE      : '0x0ac50fE91Df8DCe0d1968421Bb66F37F8380FF00',
        TREASURY    : '0xEC0c563acbA3074B72b3365C15164cCbeCED07cB',
        CONTROLLER  : '0xD215B4Ab4b63C30C1BA84887864B3d01d170bDC2'
    }
};

CC_GLOBAL.TX = {
    TYPE: {
        BUY_NEW_PACK      :  1,
        RECEIVED_NEW_PACK :  2,
        BUY_OLD_PACK      :  3,
        RECEIVED_OLD_PACK :  4,
        OPENED_PACK       :  5,
        CARD_PRICE_SET    :  6,
        CARD_SOLD         :  7,
        CARD_TRADE_SET    :  8,
        CARD_TRADED       :  9,
        CARD_COMBINED     : 10,
        CARD_MELTED       : 11,
        CARD_PRINTED      : 12,
    },
    STATUS: {
        PENDING   : 1,
        CONFIRMED : 2,
        REMOVED   : 3,
        FAILED    : 4,
        POSTED    : 5
    },
    EVENTS: {
        BUY_NEW_PACK      : 'BuyNewPack',
        RECEIVED_NEW_PACK : 'ReceivedNewPack',
        OPENED_PACK       : 'OpenedPack',
        PACK_ERROR        : 'PackError',

        PACK_PRICE_SET    : 'PackPriceSet',
        CARD_PRICE_SET    : 'CardPriceSet',
        CARD_TRADE_SET    : 'CardTradeValueSet',

        PACK_SOLD         : 'PackSale',
        CARD_SOLD         : 'CardSale',
        CARD_TRADED       : 'CardTrade',
        CARD_COMBINED     : 'CardsCombined',
        CARD_MELTED       : 'CardMelted',
        CARD_PRINTED      : 'CardPrinted',
    },
    ERROR_CODES: {
        UNKNOWN         : {CODE: 1, MSG: 'Unhandled Error Occurred'},
        PACK_ERROR      : {CODE: 2, MSG: 'Failed to generate new pack'},
        //...
        RANDOM_ERROR    : {CODE: 8, MSG: 'Fetching from Random.org failed'},
        DB_ERROR        : {CODE: 9, MSG: 'DB Operation failed'}
    }
};

CC_GLOBAL.TX_TYPE_LABELS = [
    '',
    'Buy New Pack',
    'Received New Pack',
    'Buy Existing Pack',
    'Received Existing Pack',
    'Opened Pack',
    'Set Card Price',
    'Bought Card',
    'Set Card Trade Value',
    'Traded Card',
    'Combined Cards',
    'Melted Card',
    'Printed Card',
];
