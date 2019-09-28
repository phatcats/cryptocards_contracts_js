
import bigint from 'big-integer';
import { _ } from 'lodash';

import { CryptoCardsTraits } from './card-traits';
import { CryptoCardsParser } from './parser';
import { CC_GLOBAL } from './globals';

// import * as math from 'mathjs';
import { create, all } from 'mathjs';
const mathConfig = { number: 'BigNumber' }; // , precision: CC_GLOBAL.ETHEREUM_PRECISION };
const bigmath = create(all, mathConfig);

// Helpers Object
export const CryptoCardsHelpers = {};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// GLOBALS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.getContractAddress = (networkVersion = '1') => {
    return CC_GLOBAL.CONTRACT_ADDRESS[networkVersion];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DATE & TIME
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.date = () => (new Date());
CryptoCardsHelpers.now = () => (new Date()).getTime();

CryptoCardsHelpers.delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Packs & Cards
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsHelpers.getCardDataByRank = ({year = 0, gen = 1, rank, combined = 0, special = 0, issue, gum = 0, eth = 0, traits = 0}) => {
    issue = (!_.isNumber(issue) || issue < 1) ? _.random(10, 2000) : issue;
    return CryptoCardsParser.serializeCard({year, gen, rank, combined, special, issue, gum, eth, traits});
};

CryptoCardsHelpers.getCardTypeByRank = (rank) => {
    let type = 0;
    if (rank === CC_GLOBAL.SPECIAL_CARD_RANK) {
        return CC_GLOBAL.SPECIAL_CARD_TYPE;
    }
    for (; type < CC_GLOBAL.CARD_TYPE_RANGE.length; type++) {
        if (rank < CC_GLOBAL.CARD_TYPE_RANGE[type]) {
            break;
        }
    }
    // 1 = Legendary
    // 2 = Epic
    // 3 = Rare
    // 4 = Scarce
    // 5 = Common
    return type + 1;
};

CryptoCardsHelpers.isCardSpecialIssue = (issue) => {
    return (issue === 1 || (issue % CC_GLOBAL.SPECIAL_CARD_MOD) === 0);
};

CryptoCardsHelpers.getCardTypeMax = (cardType) => {
    if (cardType === CC_GLOBAL.SPECIAL_CARD_TYPE) { return [CC_GLOBAL.SPECIAL_CARD_RANK]; }
    const typeIdx = _.parseInt(cardType, CC_GLOBAL.NUM_BASE) - 1;
    if (typeIdx === 0) { return CC_GLOBAL.CARD_TYPE_RANGE[typeIdx]; }
    return CC_GLOBAL.CARD_TYPE_RANGE[typeIdx] - CC_GLOBAL.CARD_TYPE_RANGE[typeIdx - 1];
};

CryptoCardsHelpers.getCardTypeLabel = (cardType) => {
    if (cardType === CC_GLOBAL.SPECIAL_CARD_TYPE) { return 'Special'; }
    return _.capitalize(_.keys(CC_GLOBAL.CARD_TYPE)[cardType]);
};

CryptoCardsHelpers.findCombinableCards = ({ownerCards, sourceCard, includePacked = false}) => {
    const combinableCards = [];

    _.forEach(ownerCards, ownerCard => {
        if (ownerCard.cardId === sourceCard.cardId) { return; }
        if (ownerCard.gen < 1) { return; }
        if (!includePacked && !!ownerCard.packed) { return; }

        const conditions = [
            ownerCard.year === sourceCard.year,
            ownerCard.gen === sourceCard.gen,
            ownerCard.rank === sourceCard.rank,
        ];

        if (_.every(conditions, Boolean)) {
            combinableCards.push(ownerCard);
        }
    });

    return {combinableCards};
};

CryptoCardsHelpers.generateCombinedCard = ({sourceCard, combineCard, cardIssue}) => {
    const fields = ['cardType','year','gen','rank','issue','combined','gum','eth','traits','specialty'];
    const resultCard = _.assignIn({}, _.pick(sourceCard, fields));

    resultCard.gen -= 1;
    resultCard.issue = cardIssue;
    resultCard.gum += combineCard.gum;
    resultCard.eth += combineCard.eth;
    resultCard.combined += (combineCard.combined + 1);

    const traits = [
        CryptoCardsTraits.toTraits(sourceCard.traits),
        CryptoCardsTraits.toTraits(combineCard.traits)
    ];
    resultCard.traits = CryptoCardsTraits.combineTraits(traits).toString(CC_GLOBAL.NUM_BASE);

    return resultCard;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ETHEREUM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.toBigNumber = (value) => {
    // const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
    return bigmath.bignumber(value);
};
CryptoCardsHelpers.fromBigNumber = (value) => {
    // const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
    return bigmath.divide(value, CC_GLOBAL.ETHEREUM_UNIT);
};

CryptoCardsHelpers.strFromBigint = (value, base = CC_GLOBAL.NUM_BASE) => {
    return bigint(value, base).toString(base);
};
CryptoCardsHelpers.intFromBigint = (value, base = CC_GLOBAL.NUM_BASE) => {
    return _.parseInt(CryptoCardsHelpers.strFromBigint(value, base), base);
};
CryptoCardsHelpers.floatFromBigint = (value, base = CC_GLOBAL.NUM_BASE) => {
    return parseFloat(CryptoCardsHelpers.strFromBigint(value, base));
};

CryptoCardsHelpers.hexToBigIntStr = (value) => {
    return bigint(value, CC_GLOBAL.HEX_BASE).toString(CC_GLOBAL.NUM_BASE);
};

CryptoCardsHelpers.bigIntToHexStr = (value) => {
    return bigint(value, CC_GLOBAL.NUM_BASE).toString(CC_GLOBAL.HEX_BASE);
};

CryptoCardsHelpers.fromEtherToString = (value, base = 10) => {
    return bigint(value, base).div(CC_GLOBAL.ETHEREUM_UNIT).toString();
};
CryptoCardsHelpers.fromEtherToInt = (value, base = 10) => {
    return _.parseInt(CryptoCardsHelpers.fromEtherToString(value, base), base);
};
CryptoCardsHelpers.fromEtherToFloat = (value, base = 10) => {
    return parseFloat(CryptoCardsHelpers.fromEtherToString(value, base));
};

CryptoCardsHelpers.upperCaseAddress = (address) => {
    if (!_.isString(address)) { return address; }
    return address.toUpperCase().replace(/^0X/i, '0x');
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ACCOUNT
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.fixAddress = (address) => {
    if (!_.isString(address)) { return address; }
    return _.toLower(address);
};

CryptoCardsHelpers.shortAddress = (address) => {
    if (_.isEmpty(address)) { return ''; }
    return _.slice(CryptoCardsHelpers.fixAddress(address), address.length-6).join('');
};

CryptoCardsHelpers.isAddressZero = (address) => (CryptoCardsHelpers.shortAddress(address) === '000000');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TRANSACTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.normalizeTxType = (txData, eventType) => {
    _.forEach(txData, tx => {
        if (!tx.type || tx.type === 'mined') {
            tx.type = eventType;
        }
    });
};

CryptoCardsHelpers.normalizeTxArgs = (web3, txData) => {
    const _parseValue = (value, type) => {
        switch (type) {
            case 'hex':
                return web3.utils.hexToAscii(value);
            case 'eth':
                return web3.utils.fromWei(value);
            case 'address':
                return CryptoCardsHelpers.fixAddress(value);
            default:
                return value;
        }
    };

    if (!_.isArray(txData)) { txData = [txData]; }
    _.forEach(txData, tx => {
        _.forOwn(tx, (value, key) => {
            if (_.isObject(value)) {
                CryptoCardsHelpers.normalizeTxArgs(web3, value);
                return;
            }
            if (/uuid/i.test(key)) {
                tx[key] = _parseValue(value, 'hex');
            }
            if (/owner|receiver|from/i.test(key) || key === 'to') {
                tx[key] = _parseValue(value, 'address');
            }
            if (_.startsWith(key, 'price')) {
                tx[key] = _parseValue(value, 'eth');
            }
        });
    });
};

CryptoCardsHelpers.findInDeep = (obj, keyToFind) => {
    if (_.has(obj, keyToFind)) {
        return obj[keyToFind];
    }

    let found;
    const keys = _.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (_.isObject(obj[keys[i]])) {
            found = CryptoCardsHelpers.findInDeep(obj[keys[i]], keyToFind);
            if (!_.isUndefined(found)) { break; }
        }
    }
    return found;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Miscellaneous
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.promisify = f => (...args) => new Promise((resolve, reject) => {
    f(...args, (err, val) => {
        if (err) {
            reject(err);
        } else {
            resolve(val);
        }
    });
});

