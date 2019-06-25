
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';


export class CryptoCardsController extends ContractBase {
    constructor({web3provider, logger}) {
        super('CONTROLLER', CryptoCardsControllerABI, web3provider, logger);
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
