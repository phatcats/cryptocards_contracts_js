
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsCardsABI } from './crypto-cards-cards.abi';


export class CryptoCardsCards extends ContractBase {
    constructor({web3provider, logger}) {
        super('CARDS', CryptoCardsCardsABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsCards._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsCards._instance) {
            CryptoCardsCards._instance = new CryptoCardsCards({web3provider, logger});
        }
        return CryptoCardsCards._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsCards._instance = null; // Static Instance Member for Singleton Pattern
