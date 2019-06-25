
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsLibABI } from './crypto-cards-lib.abi';


export class CryptoCardsLib extends ContractBase {
    constructor({web3provider, logger}) {
        super('LIB', CryptoCardsLibABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsLib._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsLib._instance) {
            CryptoCardsLib._instance = new CryptoCardsLib({web3provider, logger});
        }
        return CryptoCardsLib._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsLib._instance = null; // Static Instance Member for Singleton Pattern
