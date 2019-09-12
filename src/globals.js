
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
        LIB         : '0xEF47a28644F25D1634FC76a7E29d9c1CcE4ef7A4',
        GUM         : '0xEc80F7b293d26c2CD5A8468356578EA5BE268181',
        GUM_TOKEN   : '0x30A40Eb1d517a9fb07A5a83787B8A66F47335456',
        CARDS       : '0xa1839a88c0a014eAF160a42656F34108fa504198',
        CARDS_TOKEN : '0x6B1945945A79B35f38550877808ed03836Cd04b0',
        PACKS       : '0x93f55106EcAC41d5aD024e8a249304f7250b8cFd',
        PACKS_TOKEN : '0x1D8B7FaE597c6edb8B9b104dF49D43121E0Fc808',
        ORACLE      : '0xf52796372Ad492C8fABf77323d4771D9C8Dfb69C',
        TREASURY    : '0x64DcD4CCBb39044150037A6615EDbB1E5D6373C6',
        CONTROLLER  : '0x0648890dBF659375FefBd19013367851521D8EC8'
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
