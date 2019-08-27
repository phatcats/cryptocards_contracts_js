
export const CC_GLOBAL = {};

CC_GLOBAL.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
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
CC_GLOBAL.CARD_TYPE_RANGES = [
    [0, 9],
    [10, 47],
    [48, 95],
    [96, 159],
    [160, 255]
];

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
        LIB         : '0x813226B27174CF1b161253256D3b35e9Bee31cE3',
        GUM         : '0x53aF23f0D88f07d726595C6834e79a89F76fEA4d',
        GUM_TOKEN   : '0x12205aCBE5cce156b3Ac60BC5CCF72ed92dB1A99',
        CARDS       : '0x44BA53eDF853d974C8F7287aCb139Df9b4cC9f6B',
        CARDS_TOKEN : '0x3ee99aDbFd84111D46B9A18cbA2529eaeC41709d',
        PACKS       : '0x1F59D41a2741d7dAdfd04E098FB8D183850fA407',
        PACKS_TOKEN : '0xc04AD9a68ab96b6f8766ec59a7A0d125Ce7e491E',
        ORACLE      : '0xaF59b793810Db2731cedE635E544B366c2302fA6',
        TREASURY    : '0x85bC1A88a3861DDbA523B095E822306b07ca86cD',
        CONTROLLER  : '0x399c81a18c7f08e64805bc888687fCF202eabD98'
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

        OPEN_PACK         :  5,
        OPENED_PACK       :  6,

        SET_CARD_PRICE    :  7,
        CARD_PRICE_SET    :  8,

        BUY_CARD          :  9,
        CARD_SOLD         : 10,

        SET_CARD_TRADE    : 11,
        CARD_TRADE_SET    : 12,

        TRADE_CARD        : 13,
        CARD_TRADED       : 14
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
        CARD_TRADED       : 'CardTrade'
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
    '',
    'Buy Existing Pack',
    '',
    'Open Pack',
    'Opened Pack',
    '',
    'Set Card Price',
    'Buy Card',
    'Card Sold',
    '',
    'Set Card Trade Value',
    'Trade Card',
    'Card Received from Trade'
];
