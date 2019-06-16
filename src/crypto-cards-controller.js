
import { _ } from 'lodash';

import { CryptoCardsHelpers } from './helpers';

import { ContractBase } from './contract-base';
import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';


class _ICryptoCardsController extends ContractBase {
    constructor(web3provider, logger) {
        super('CONTROLLER', CryptoCardsControllerABI, web3provider, logger);
    }

    getContractVersion() {
        if (!this.isProviderReady) { return Promise.reject('Web3 Provider not ready (calling "getVersion")'); }
        return this.contract.methods.getVersion().call();
    }

    getNetworkVersion() {
        return this.web3.eth.net.getId();
    }

    getNetworkType() {
        return this.web3.eth.net.getNetworkType();
    }

    getNetworkPeerCount() {
        return this.web3.eth.net.getPeerCount();
    }
}


export class CryptoCardsController extends _ICryptoCardsController {
    constructor({web3provider, logger}) {
        super(web3provider, logger);
    }

    static instance() {
        return CryptoCardsController._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsController._instance) {
            CryptoCardsController._instance = new CryptoCardsController({web3provider, logger});
        }
        return CryptoCardsController._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsController._instance = null; // Static Instance Member for Singleton Pattern
