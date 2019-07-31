
export const CC_GLOBAL = {};

CC_GLOBAL.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
CC_GLOBAL.STARTING_BLOCK = {
    '1'    : 7310000, // Mainnet
    '3'    : 4400000, // Ropsten
    '5777' : 0        // Local
};
CC_GLOBAL.MAX_LATEST_BLOCKS = 50;

CC_GLOBAL.MAX_CARD         = 255;
CC_GLOBAL.MAX_CARD_TYPE    = 5;
CC_GLOBAL.CARDS_IN_PACK    = 8;
CC_GLOBAL.MAX_CARD_BITS    = 32;
CC_GLOBAL.NUM_BASE         = 10;
CC_GLOBAL.HEX_BASE         = 16;
CC_GLOBAL.SPECIAL_CARD_MOD = 100; // every 100th card of that issue  (issue % 100 === 0)

CC_GLOBAL.CARD_TYPE = {
    LEGENDARY : 1,
    EPIC      : 2,
    RARE      : 3,
    SCARCE    : 4,
    COMMON    : 5
};

CC_GLOBAL.ETHEREUM_UNIT = 1e18;
CC_GLOBAL.ETHEREUM_PRECISION = 18;

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
        LIB         : '0x7A47fbE7B25Ad940CA093e1d8f660e1DE0DEe2a4',
        GUM         : '0x59e3c478b4f84Ba07Da16AA5ad184F1253091922',
        GUM_TOKEN   : '0xe06e74AC104bAa4D84691bD66C37052C4253497A',
        CARDS       : '0x36cD8b7793bAe05900B8EcFa02DCEfe1c6239baE',
        CARDS_TOKEN : '0x6e848f5Be943317A0f48dBDfeF94530453132A38',
        PACKS       : '0x832549DF1C8c321423BfB2255455e2B6EAD0180a',
        PACKS_TOKEN : '0x1e5a8bD532a1b899b4Bf90da46d84F8Da5A0fbea',
        ORACLE      : '0x9BdEa9ed54bD9923878B77d44414dc0257B466Ca',
        TREASURY    : '0xD6A33f23ec07A71e6628aF9D13215a15eC37BA9B',
        CONTROLLER  : '0x445649c6686a7b0c50B0Fa9f744c5BB4C305edD9'
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
    'Set Card Price',
    '',
    'Buy Card',
    'Card Sold',
    'Set Card Trade Value',
    '',
    'Trade Card',
    'Card Received from Trade'
];
