
import Web3 from 'web3';
import { _ } from 'lodash';

import { CC_GLOBAL } from './globals';

export const CryptoCardsContractFactory = {

    create({addressName, abi}) {
        let _instance;
        let _utils;

        function _createInstance() {
            return Object.create(_.assignIn({}, CryptoCardsContractFactory.objInterface, {
                contractAddressName: addressName,
                contractAbi: abi,
                contractReady: false,
                contract: null,
                web3: null,
                log: _utils.logger || console.log,
            }));
        }

        return {
            prepare: ({web3provider, networkVersion, logger}) => {
                _utils = {web3provider, networkVersion, logger};
            },
            instance: () => {
                if (!_instance) {
                    if (!_utils) {
                        throw new Error('Instance has not been prepared!');
                    }
                    _instance = _createInstance();
                    _instance.connectToContract(_utils);
                }
                return _instance;
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

        connectToContract({web3provider, networkVersion}) {
            const address = CC_GLOBAL.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
            this.web3 = new Web3(web3provider);
            this.contract = new this.web3.eth.Contract(this.contractAbi, address);
            this.contractReady = !_.isEmpty(this.contract.address);
        },

        isReady() {
            return this.contractReady;
        },

        getEventsFromContract(eventName, eventOptions) {
            return this.contract.getPastEvents(eventName, eventOptions);
        },

        callContractFn(contractMethod, ...args) {
            if (!this.contractReady) {
                return Promise.reject(`Web3 Provider not ready (calling "${this.contractAddressName}->${contractMethod}")`);
            }
            return this.contract.methods[contractMethod](...args).call();
        },

        tryContractTx(contractMethod, tx, ...args) {
            if (!this.contractReady) {
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
                                }, CC_GLOBAL.WATCH_INTERVAL.RECEIPT);
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
