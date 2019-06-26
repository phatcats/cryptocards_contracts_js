
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsGumABI } from './crypto-cards-gum.abi';


export class CryptoCardsGum extends ContractBase {
    constructor({web3provider, logger}) {
        super('GUM', CryptoCardsGumABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsGum._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsGum._instance) {
            CryptoCardsGum._instance = new CryptoCardsGum({web3provider, logger});
        }
        return CryptoCardsGum._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsGum._instance = null; // Static Instance Member for Singleton Pattern
