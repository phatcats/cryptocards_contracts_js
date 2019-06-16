
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

    async initialize(networkVersion) {
        this.log('CryptoCardsController initializing..');

        networkVersion = networkVersion || await this.getNetworkVersion();
        return this.connectToContract(networkVersion);
    }
}
