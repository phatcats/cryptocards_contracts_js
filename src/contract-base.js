
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
    }

    get web3() {
        return this.ethWeb3;
    }

    set web3(ethWeb3) {
        this.ethWeb3 = ethWeb3;
    }

    connectToContract(networkVersion = '1') {
        const address = CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
        this.log('this.web3: ', this.web3);
        this.log('this.web3.eth: ', this.web3.eth);
        this.log('connecting to contract at: ', address);


        this.contract = new this.web3.eth.Contract(this.contractAbi, address);


        this.log('connected: ', this.contract.address);

        // this.contract = this.web3.eth.contract(this.contractAbi, address).at(address);
        return !_.isEmpty(this.contract.address);
    }

    getNetworkVersion() {
        return new Promise((resolve, reject) => {
            this.log('getNetworkVersion called');
            this.web3.version.getNetwork((err, networkVersion) => {
                if (err) {
                    reject(err);
                } else {
                    this.log('getNetworkVersion networkVersion = ', networkVersion);
                    resolve(networkVersion);
                }
            });
        });
    }

    getEventsFromContract(eventName, eventQuery, eventFilters) {
        return new Promise((resolve, reject) => {
            this.contract[eventName](eventQuery, eventFilters).get((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    callContractFn(contractMethod, ...args) {
        // if (!this.account.isWeb3Ready) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
        const _fn = CryptoCardsHelpers.promisify(this.contract[contractMethod]);
        return _fn(...args);
    }

    tryContractTx(contractMethod, tx, ...args) {
        // if (!this.account.isWeb3Ready) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
        // log.verbose(contractMethod, tx, ...args);

        const _fn = CryptoCardsHelpers.promisify(this.contract[contractMethod]);
        let promise;
        try {
            promise = _fn(...args, tx);
        } catch (err) {
            this.log(err);
            promise = Promise.reject(err);
        }
        return promise;
    }

    getReceipt(hash) {
        const _getTransactionReceipt = CryptoCardsHelpers.promisify(this.web3.eth.getTransactionReceipt);
        return _getTransactionReceipt(hash);
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

    // Deprecated
    waitForReceipt(hash, cb) {
        this.getReceipt(hash)
            .then(receipt => {
                if (receipt !== null) {
                    // Transaction went through
                    if (cb) {
                        cb(receipt);
                    }
                } else {
                    // Try again in 1 second
                    setTimeout(() => {
                        this.waitForReceipt(hash, cb);
                    }, WATCH_INTERVAL.RECEIPT);
                }
            })
            .catch(this.log);
    }
}
