
import { _ } from 'lodash';

import { CryptoCardsHelpers } from './helpers';

import { ContractBase } from './contract-base';
import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';


class _ICryptoCardsController extends ContractBase {
    constructor(web3, logger) {
        super('CONTROLLER', CryptoCardsControllerABI, web3, logger);
    }

    getVersion() {
        // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
        const _fn = CryptoCardsHelpers.promisify(this.contract.getVersion);
        return _fn();
    }
}

export class CryptoCardsController extends _ICryptoCardsController {
    constructor({web3, logger}) {
        super(web3, logger);

        this.log('CryptoCardsController created');
    }

    static instance() {
        return CryptoCardsController._instance;
    }

    static async initialize({web3, networkVersion, logger}) {
        if (!CryptoCardsController._instance) {
            this.log('CryptoCardsController initializing..');
            CryptoCardsController._instance = new CryptoCardsController({web3, logger});
        }

        // networkVersion = networkVersion || await this.getNetworkVersion();
        return CryptoCardsController._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsController._instance = null; // Static Instance Member for Singleton Pattern
