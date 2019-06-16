
import Web3 from 'web3';
import { _ } from 'lodash';

import { CryptoCardsHelpers } from './helpers';

import {
    CONTRACT_ADDRESS,
    WATCH_INTERVAL
} from './globals';

export class ContractBase {
    constructor(addressName, abi, web3provider, logger) {
        this.ethWeb3 = new Web3(web3provider);
        this.contract = null;
        this.contractAddressName = addressName;
        this.contractAbi = abi;
        this.log = logger || console.log;
        this.providerReady = false;
    }

    get web3() {
        return this.ethWeb3;
    }

    set web3(ethWeb3) {
        this.ethWeb3 = ethWeb3;
    }

    get isProviderReady() {
        return this.providerReady;
    }

    set isProviderReady(ready) {
        this.providerReady = ready;
    }

    connectToContract(networkVersion = '1') {
        const address = CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
        this.contract = new this.web3.eth.Contract(this.contractAbi, address);
        this.isProviderReady = !_.isEmpty(this.contract.address);
        return this.isProviderReady;
    }

    getEventsFromContract(eventName, eventOptions) {
        return this.contract.getPastEvents(eventName, eventOptions);
    }

    callContractFn(contractMethod, ...args) {
        if (!this.isProviderReady) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
        return this.contract.methods[contractMethod](...args).call();
    }

    tryContractTx(contractMethod, tx, ...args) {
        if (!this.isProviderReady) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
        // log.verbose(contractMethod, tx, ...args);
        return this.contract.methods[contractMethod](...args).send(tx);
    }

    getReceipt(hash) {
        return this.web3.eth.getTransactionReceipt(hash);
    }

    getTransactionReceipt(hash) {
        return new Promise((resolve, reject) => {
            const _getReceipt = () => {
                this.getReceipt(hash)
                    .then(receipt => {
                        if (receipt === null) {
                            // Try again in 1 second
                            setTimeout(() => { _getReceipt(); }, WATCH_INTERVAL.RECEIPT);
                            return;
                        }
                        resolve(receipt);
                    })
                    .catch(reject);
            };
            _getReceipt();
        });
    }
}
