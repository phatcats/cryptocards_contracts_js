
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsPacksABI } from './crypto-cards-packs.abi';


export class CryptoCardsPacks extends ContractBase {
    constructor({web3provider, logger}) {
        super('PACKS', CryptoCardsPacksABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsPacks._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsPacks._instance) {
            CryptoCardsPacks._instance = new CryptoCardsPacks({web3provider, logger});
        }
        return CryptoCardsPacks._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsPacks._instance = null; // Static Instance Member for Singleton Pattern
