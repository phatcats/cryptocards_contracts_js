
import { _ } from 'lodash';

import { Helpers } from './helpers';

import {
    CONTRACT_ADDRESS,
    WATCH_INTERVAL
} from './globals';

export class ContractBase {
    constructor(addressName, abi, web3, logger) {
        this.ethWeb3 = web3;
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
        this.contract = this.web3.eth.contract(this.contractAbi, address).at(address);
        return !_.isEmpty(this.contract.address);
    }

    getNetworkVersion() {
        return new Promise((resolve, reject) => {
            this.web3.version.getNetwork((err, networkVersion) => {
                if (err) {
                    reject(err);
                } else {
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
        const _fn = Helpers.promisify(this.contract[contractMethod]);
        return _fn(...args);
    }

    tryContractTx(contractMethod, tx, ...args) {
        // if (!this.account.isWeb3Ready) { return Promise.reject(`Web3 Provider not ready (calling "${contractMethod}")`); }
        // log.verbose(contractMethod, tx, ...args);

        const _fn = Helpers.promisify(this.contract[contractMethod]);
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
        const _getTransactionReceipt = Helpers.promisify(this.web3.eth.getTransactionReceipt);
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
