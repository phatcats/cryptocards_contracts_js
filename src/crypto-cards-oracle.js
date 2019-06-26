
import { _ } from 'lodash';

import { ContractBase } from './contract-base';
import { CryptoCardsOracleABI } from './crypto-cards-oracle.abi';


export class CryptoCardsOracle extends ContractBase {
    constructor({web3provider, logger}) {
        super('ORACLE', CryptoCardsOracleABI, web3provider, logger);
    }

    static instance() {
        return CryptoCardsOracle._instance;
    }

    static async initialize({web3provider, networkVersion, logger}) {
        if (!CryptoCardsOracle._instance) {
            CryptoCardsOracle._instance = new CryptoCardsOracle({web3provider, logger});
        }
        return CryptoCardsOracle._instance.connectToContract(networkVersion);
    }
}
//
// Static Member Variables
//
CryptoCardsOracle._instance = null; // Static Instance Member for Singleton Pattern
