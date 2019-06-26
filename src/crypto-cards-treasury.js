
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsTreasuryABI } from './crypto-cards-treasury.abi';


export class CryptoCardsTreasury extends ContractBase {
    constructor({web3provider, logger}) {
        super('TREASURY', CryptoCardsTreasuryABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsTreasury._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsTreasury._instance) {
            CryptoCardsTreasury._instance = new CryptoCardsTreasury({web3provider, logger});
        }
        return CryptoCardsTreasury._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsTreasury._instance = null; // Static Instance Member for Singleton Pattern
