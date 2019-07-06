
import { CC_GLOBAL } from './globals';
import bigint from 'big-integer';
import * as math from 'mathjs';
import { _ } from 'lodash';

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ETHEREUM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CryptoCardsHelpers.toBigNumber = (value) => {
    const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
    return bigmath.bignumber(value);
};
CryptoCardsHelpers.fromBigNumber = (value) => {
    const bigmath = math.create({number: 'BigNumber', precision: CC_GLOBAL.ETHEREUM_PRECISION});
    return bigmath.divide(value, CC_GLOBAL.ETHEREUM_UNIT);
};

CryptoCardsHelpers.strFromBigint = (value, base = 10) => {
    return bigint(value, base).toString(base);
};
CryptoCardsHelpers.intFromBigint = (value, base = 10) => {
    return _.parseInt(CryptoCardsHelpers.strFromBigint(value, base), base);
};
CryptoCardsHelpers.floatFromBigint = (value, base = 10) => {
    return parseFloat(CryptoCardsHelpers.strFromBigint(value, base));
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
    const _parseValue = (value, key = '') => {
        if (_.isObject(value) && (value instanceof web3.BigNumber)) {
            if (_.startsWith(key, '_price')) {
                return CryptoCardsHelpers.strFromBigint(value);
            }
            return CryptoCardsHelpers.intFromBigint(value);
        }
        else if (_.isString(value) && _.startsWith(value, '0x')) {
            if (web3.isAddress(value)) {
                return value; // CryptoCardsHelpers.upperCaseAddress(value);
            }
            return web3.toAscii(value);
        }
        return value;
    };

    _.forEach(txData, tx => {
        _.forOwn(tx.args, (value, key) => {
            if (_.isArray(value)) {
                tx.args[key] = _.map(value, v => _parseValue(v, key));
            } else {
                tx.args[key] = _parseValue(value, key);
            }
        });
    });
};


CryptoCardsHelpers.promisify = f => (...args) => new Promise((resolve, reject) => {
    f(...args, (err, val) => {
        if (err) {
            reject(err);
        } else {
            resolve(val);
        }
    });
});

