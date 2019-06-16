
import { _ } from 'lodash';

import { CryptoCardsHelpers } from './helpers';

import { ContractBase } from './contract-base';
import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';


class _ICryptoCardsController extends ContractBase {
    constructor(web3provider, logger) {
        super('CONTROLLER', CryptoCardsControllerABI, web3provider, logger);
    }

    getVersion() {
        // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
        const _fn = CryptoCardsHelpers.promisify(this.contract.getVersion);
        return _fn();
    }

    getVersion2() {
        // if (!this.account.hasNetwork) { return Promise.reject('Provider not ready'); }
        return this.contract.methods.getVersion().call();
    }
}

export class CryptoCardsController extends _ICryptoCardsController {
    constructor({web3provider, logger}) {
        super(web3provider, logger);

        this.log('CryptoCardsController created');
        this.log('web3provider', web3provider);
    }

    static instance() {
        return CryptoCardsController._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsController._instance) {
            CryptoCardsController._instance = new CryptoCardsController({web3provider, logger});
        }
        _.isFunction(logger) && logger('CryptoCardsController initializing..');

        // networkVersion = networkVersion || await this.getNetworkVersion();
        return CryptoCardsController._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsController._instance = null; // Static Instance Member for Singleton Pattern
