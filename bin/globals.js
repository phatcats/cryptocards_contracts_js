'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WATCH_INTERVAL = exports.WATCH_INTERVAL = {
    ACCOUNT: 3000,
    RECEIPT: 3000,
    PENDING: 30000
};

var CONTRACT_ADDRESS = exports.CONTRACT_ADDRESS = {
    // Main Network
    '1': {
        LIB: '',
        GUM: '0xaAFa4Bf1696732752a4AD4D27DD1Ea6793F24Fc0',
        GUM_TOKEN: '',
        CARDS: '0xcb35d14759e2931022c7315f53e37cdcd38e570c',
        CARDS_TOKEN: '',
        PACKS: '0x0683e840ea22b089dafa0bf8c59f1a9690de7c12',
        PACKS_TOKEN: '',
        ORACLE: '0xa5215a382e75c2e1d75781b18fca0e6e31b1a536',
        TREASURY: '0x0464c25c850be54033e7698c30b97a283ced6a01',
        CONTROLLER: '0xa9f129106f4b2ff6ac3a5082e368ea988cd639ec'
    },

    // Ropsten Test Network
    '3': {
        LIB: '0xf2e0840a851323c548480d0e9d99097b53607b05',
        GUM: '0x529e6171559eFb0c49644d7b281BC5997c286CBF',
        GUM_TOKEN: '',
        CARDS: '0x81D7E3648579E27679bFc3010e673532BF77c379',
        CARDS_TOKEN: '',
        PACKS: '0xd650003aa4A1DAa3ec8d34524abE79b886e0EBBC',
        PACKS_TOKEN: '',
        ORACLE: '0xa483c5b9d95305ebc96294af60e373b029741efb',
        TREASURY: '0xd7cf29724856213c780b3b33d6c294ebc2d744ca',
        CONTROLLER: '0xfe8e20659d67eb5fa10c78b74c9f366460dac329'
    },

    // Ganache Private Test Network
    '5777': {
        LIB: '',
        GUM: '0xF70B61E3800dFFDA57cf167051CAa0Fb6bA1B0B3',
        GUM_TOKEN: '',
        CARDS: '0x89eC3f11E1600BEd981DD2d12404bAAF21c7699c',
        CARDS_TOKEN: '',
        PACKS: '0x01b9707dD7782bB441ec57C1B62D669896859096',
        PACKS_TOKEN: '',
        ORACLE: '0x9e1d8ce16edd77a449b62e155596314e4e6d684f',
        TREASURY: '0x02c781e63ce3a036457d940b57d461f1754aa476',
        CONTROLLER: '0xfbb58f952c6e86da1719c5257b89e6c07b78c23f'
    }
};

var TX = exports.TX = {
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
        FAILED: 4
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

var TX_TYPE_LABELS = exports.TX_TYPE_LABELS = ['', 'Buy New Pack', '', 'Buy Existing Pack', '', 'Open Pack', 'Opened Pack', 'Set Card Price', '', 'Buy Card', 'Card Sold', 'Set Card Trade Value', '', 'Trade Card', 'Card Received from Trade'];