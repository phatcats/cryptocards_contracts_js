
import {
    CONTRACT_ADDRESS
} from './globals';


// Helpers Object
export const CryptoCardsHelpers = {};

CryptoCardsHelpers.getContractAddress = (networkVersion = '1') => {
    return CONTRACT_ADDRESS[networkVersion];
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

