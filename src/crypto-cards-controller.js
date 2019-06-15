
import { _ } from 'lodash';

import { CryptoCardsHelpers } from './helpers';

import { ContractBase } from './contract-base';
import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';


class _ICryptoCardsController extends ContractBase {
    constructor(web3, logger) {
        super('CONTROLLER', CryptoCardsControllerABI, web3, logger);
    }

    getPromoCode(codeIndex) {
        // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
        const _fn = CryptoCardsHelpers.promisify(this.contract.getPromoCode);
        return _fn(codeIndex);
    }

    getPrice(generation) {
        // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
        const _fn = CryptoCardsHelpers.promisify(this.contract.getPrice);
        return _fn(generation);
    }
}

export class CryptoCardsController extends _ICryptoCardsController {
    constructor(web3, logger) {
        super(web3, logger);

        logger('CryptoCardsController created');
    }

    static instance() {
        if (!CryptoCardsController._instance) {
            CryptoCardsController._instance = new CryptoCardsController();
        }
        return CryptoCardsController._instance;
    }

}
//
// Static Member Variables
//
CryptoCardsController._instance = null; // Static Instance Member for Singleton Pattern
