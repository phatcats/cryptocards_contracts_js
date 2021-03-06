
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
CC_GLOBAL.SPECIAL_CARD_RANK = (1 << 10) - 1;
CC_GLOBAL.SPECIAL_CARD_TYPE = 9;

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

CC_GLOBAL.CHASE_CARD_RANKS = {
    ETH_WATERLOO: 500
};

CC_GLOBAL.PACK_PRICE_DISCOUNT =  [5, 10, 15, 0]; // % off base price

CC_GLOBAL.ETHEREUM_UNIT = 1e18;
CC_GLOBAL.ETHEREUM_PRECISION = 18;
CC_GLOBAL.WRAPPED_ETH_MULT = 1000000;

CC_GLOBAL.WATCH_INTERVAL = {
    ACCOUNT :  3000,
    RECEIPT :  3000,
    PENDING : 30000
};

CC_GLOBAL.PROMO_PACK_HOLDER = '0x8F9C2a251831cbf07134b0430bcfea708E8a4feF';
CC_GLOBAL.ETHWATERLOO_PROMO_CODES = ['frda9t6pb', 'p2gs75kq9', 'ke4wfxb57', 'pcg58dse6', '98dawsrkz', 'rc8236xyq', '698wxtqks', 'fdaewxsc9', '8y4dbgr7k', '2pewgxh5z', 'q4ehgfc8z', 'w96aftrqz', 'rqktpbg9z', 'ha2gsx64e', 'kpeg9s35f', '7w8b49pc6', '6hrq5f2zw', '4kds2chfw', 'txcw3fs9r', 's6r7h9pyg', 'ftrwdayz5', 'br3qa9hpy', 'ckzq23r87', 'db28rwx4p', 'k8qa43hw7', '9ktxc53zw', 'rfsxkgp9b', '67scwp2fd', 'zq8pgdk3c', 'ry8f4kc6e', '8zfqr2yt7', 'kh5f3adc8', 'cgxr68b7y', 'sfdkah2w3', 'gdh58y73b', '9zxb8fq7y', 'bkgwzy53x', 'z9e5g2ax4', 's3htg6a78', 'r7adtxq4h', '7ed6gp4rh', '7srt4cpa9', 'adezgyx5f', '79dycp2bt', 'p6e7txfkz', '7sczwrphg', 'p6eq49ryf', 'xs3phykr8', 'eah6p4bq3', 'ch7qgz5tp'];

CC_GLOBAL.CONTRACT_ADDRESS = {
    // Main Network
    '1' : {
        LIB         : '0xBD03E74e01eB67E486613F4CAC333F2af6D2ad52',
        GUM         : '0x0A792c74258F4B95BA55542f8f2560d5F167783A',
        GUM_TOKEN   : '0x2b517552A2bCd3cdf9c14f74F56c448d660dC898',
        CARDS       : '0x98290b8BBEdF7f8aB276Ba387223f3ba2364B9Df',
        CARDS_TOKEN : '0x983Ea5F1e0950dAb1E7759135E7F3f4E3CccD7d6',
        PACKS       : '0x69e9Af7248af651c2c75Cd5d8e7925E1614D719D',
        PACKS_TOKEN : '0x03687aB12C43291bd9aA171f051Cc1691b001952',
        PROMO_MGR   : '0xAa91d14B96D78A8C2B6F2eb0516Fc14e296D34B1',
        ORACLE      : '0x8aaaa0Fbd779bfcc194A620C15dB088e22352D34',
        TREASURY    : '0x0464c25c850be54033e7698c30b97a283ced6a01',
        CONTROLLER  : '0x6338506Fe676205E2a3547e0826aD2f6D6eF4eB8'
    },

    // Ropsten Test Network
    '3' : {
        LIB         : '0x3f50d370dC01E464FAf1cA0b06F79cD74371BE08',
        GUM         : '0x2B9299FE9e20471eDFC62110C9825ca7127BDE7A',
        GUM_TOKEN   : '0x6DF688a3d51fC35dcf7e893b929155E36Ef306BD',
        CARDS       : '0xD90b47C68Ef4146AAf1eaEC734E6b72dc9d6c6Da',
        CARDS_TOKEN : '0x2FF11E910a30BBe16B872e9632bF9AD0c1d4FE2c',
        PACKS       : '0xaeD9c77971C27BBecaAc4f28C7E59B2F9576aC99',
        PACKS_TOKEN : '0xb5ef67a775a5985f4273542CF62c169b9B82e387',
        PROMO_MGR   : '0x8a999E9eb543843189824b8144b2cbf71EDe3c90',
        ORACLE      : '0x4429f7124dEF6f6f6CB0233B23f865bfEB11Cf4f',
        TREASURY    : '0x3aBd279Daca8BD4cc5B237D04a9eAb15B9D4309E',
        CONTROLLER  : '0xAd873e4c0BF8CBf6a423438EE761b4861DfD6A60'
    },

    // Ganache Private Test Network
    '5777' : {
        LIB         : '0x22BB50A434E82716773cFF9306c9F1D2FB65bFBC',
        GUM         : '0xfBb58f952c6e86DA1719c5257b89E6C07B78c23f',
        GUM_TOKEN   : '0xF70B61E3800dFFDA57cf167051CAa0Fb6bA1B0B3',
        CARDS       : '0xA51A7dD583669a958059362dF2601197d8eE3B39',
        CARDS_TOKEN : '0x89eC3f11E1600BEd981DD2d12404bAAF21c7699c',
        PACKS       : '0xeE09F9b736d151732740Db085eD31E59bbFffD15',
        PACKS_TOKEN : '0x01b9707dD7782bB441ec57C1B62D669896859096',
        PROMO_MGR   : '0xc46F9bdA6c824344BE8e481D3eD9A4DF8A2656c7',
        ORACLE      : '0xEC0c563acbA3074B72b3365C15164cCbeCED07cB',
        TREASURY    : '0xEA1b680FFda06832e8F7F67F33491e68098Aa631',
        CONTROLLER  : '0xF401B688DdAf3D86E28590D191a42c398Eb46e1a'
    }
};

CC_GLOBAL.TX = {
    TYPE: {
        BUY_NEW_PACK        :  1,
        RECEIVED_NEW_PACK   :  2,
        BUY_OLD_PACK        :  3,
        RECEIVED_OLD_PACK   :  4,
        OPENED_PACK         :  5,
        CARD_PRICE_SET      :  6,
        CARD_SOLD           :  7,
        CARD_TRADE_SET      :  8,
        CARD_TRADED         :  9,
        CARD_COMBINED       : 10,
        CARD_MELTED         : 11,
        CARD_PRINTED        : 12,
        RECEIVED_PROMO_PACK : 13,
        CLAIMED_PROMO_PACK  : 14,
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

        RECEIVED_PROMO_PACK : 'ReceivedPromoPack',
        CLAIMED_PROMO_PACK  : 'PromoPackTransferred',
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
    'Received Promo Pack',
    'Claimed Promo Pack',
];
