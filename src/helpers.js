
import {
    TX,
    TX_TYPE_LABELS,
    CONTRACT_ADDRESS
} from './globals';


// Helpers Object
export const CryptoCardsHelpers = {};

CryptoCardsHelpers.getContractAddress = (networkVersion = '1') => {
    return CONTRACT_ADDRESS[networkVersion];
};

CryptoCardsHelpers.getTxTypeConstants = () => {
    return TX.TYPE;
};

CryptoCardsHelpers.getTxStatusConstants = () => {
    return TX.STATUS;
};

CryptoCardsHelpers.getTxEventConstants = () => {
    return TX.EVENTS;
};

CryptoCardsHelpers.getTxTypeLabels = () => {
    return TX_TYPE_LABELS;
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

