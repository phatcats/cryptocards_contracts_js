
import Web3 from 'web3';
import { _ } from 'lodash';

import { CC_GLOBAL } from './globals';

export const CryptoCardsContractFactory = {

    create({addressName, abi}) {
        let _instance;
        let _utils;

        function _createInstance() {
            return Object.create(_.assignIn({}, this.objInterface, {
                contractAddressName: addressName,
                contractAbi: abi,
                isProviderReady: false,
                contract: null,
                web3: new Web3(_utils.web3provider),
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
                    _instance.connectToContract(_utils.networkVersion);
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

        connectToContract(networkVersion = '1') {
            const address = CC_GLOBAL.CONTRACT_ADDRESS[networkVersion][this.contractAddressName];
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
