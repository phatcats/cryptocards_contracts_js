
import Web3 from 'web3';
import { _ } from 'lodash';

import {
    CONTRACT_ADDRESS,
    WATCH_INTERVAL
} from './globals';

const ns = global || window;
ns.CryptoCardsNamespace = {};

export const CryptoCardsContractFactory = {

    create({addressName, abi}) {
        return {
            instance: function({web3provider, networkVersion, logger}) {
                if (!ns.CryptoCardsNamespace[addressName]) {
                    ns.CryptoCardsNamespace[addressName] = Object.create(_.assignIn({}, this.objInterface, {
                        contractAddressName: addressName,
                        contractAbi: abi,
                        web3: new Web3(web3provider),
                        log: logger || console.log,
                        isProviderReady: false,
                        contract: null,
                    }));
                    ns.CryptoCardsNamespace[addressName].connectToContract(networkVersion);
                }
                return ns.CryptoCardsNamespace[addressName];
            }
        };
    },

    objInterface: {
        getNetworkVersion() {
            return this.web3.eth.net.getId();
        },

        getNetworkType() {
            return this.web3.eth.net.getNetworkType();
        },

        getNetworkPeerCount() {
            return this.web3.eth.net.getPeerCount();
        },

        connectToContract(networkVersion = '1') {
            const address = CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
            this.contract = new this.web3.eth.Contract(this.contractAbi, address);
            this.isProviderReady = !_.isEmpty(this.contract.address);
        },

        getEventsFromContract(eventName, eventOptions) {
            return this.contract.getPastEvents(eventName, eventOptions);
        },

        callContractFn(contractMethod, ...args) {
            if (!this.isProviderReady) {
                return Promise.reject(`Web3 Provider not ready (calling "${this.contractAddressName}->${contractMethod}")`);
            }
            return this.contract.methods[contractMethod](...args).call();
        },

        tryContractTx(contractMethod, tx, ...args) {
            if (!this.isProviderReady) {
                return Promise.reject(`Web3 Provider not ready (calling "${this.contractAddressName}->${contractMethod}")`);
            }
            return this.contract.methods[contractMethod](...args).send(tx);
        },

        getReceipt(hash) {
            return this.web3.eth.getTransactionReceipt(hash);
        },

        getTransactionReceipt(hash) {
            return new Promise((resolve, reject) => {
                const _getReceipt = () => {
                    this.getReceipt(hash)
                        .then(receipt => {
                            if (receipt === null) {
                                // Try again in 1 second
                                setTimeout(() => {
                                    _getReceipt();
                                }, WATCH_INTERVAL.RECEIPT);
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
};
