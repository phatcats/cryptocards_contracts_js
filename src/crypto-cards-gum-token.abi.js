
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsGumTokenABI } from './crypto-cards-gum-token.abi';


export class CryptoCardsGumToken extends ContractBase {
    constructor({web3provider, logger}) {
        super('GUM_TOKEN', CryptoCardsGumTokenABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsGumToken._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsGumToken._instance) {
            CryptoCardsGumToken._instance = new CryptoCardsGumToken({web3provider, logger});
        }
        return CryptoCardsGumToken._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsGumToken._instance = null; // Static Instance Member for Singleton Pattern
