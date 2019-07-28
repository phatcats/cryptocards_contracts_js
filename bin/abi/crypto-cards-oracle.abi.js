"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsOracleABI = void 0;
var CryptoCardsOracleABI = [{
  'constant': false,
  'inputs': [],
  'name': 'renounceOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'owner',
  'outputs': [{
    'name': '',
    'type': 'address'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'isOwner',
  'outputs': [{
    'name': '',
    'type': 'bool'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'newOwner',
    'type': 'address'
  }],
  'name': 'transferOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'receiver',
    'type': 'address'
  }, {
    'indexed': false,
    'name': 'uuid',
    'type': 'bytes16'
  }, {
    'indexed': false,
    'name': 'packId',
    'type': 'uint256'
  }, {
    'indexed': false,
    'name': 'packData',
    'type': 'string'
  }],
  'name': 'ReceivedNewPack',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'receiver',
    'type': 'address'
  }, {
    'indexed': false,
    'name': 'uuid',
    'type': 'bytes16'
  }, {
    'indexed': false,
    'name': 'errorCode',
    'type': 'uint8'
  }],
  'name': 'PackError',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'previousOwner',
    'type': 'address'
  }, {
    'indexed': true,
    'name': 'newOwner',
    'type': 'address'
  }],
  'name': 'OwnershipTransferred',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{
    'name': '_owner',
    'type': 'address'
  }],
  'name': 'initialize',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{
    'name': '_uuid',
    'type': 'bytes16'
  }],
  'name': 'isValidUuid',
  'outputs': [{
    'name': '',
    'type': 'bool'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'getGasReserve',
  'outputs': [{
    'name': '',
    'type': 'uint256'
  }],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'receiver',
    'type': 'address'
  }, {
    'name': 'gasReserve',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'getNewPack',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_myid',
    'type': 'bytes32'
  }, {
    'name': '_result',
    'type': 'string'
  }, {
    'name': '_proof',
    'type': 'bytes'
  }],
  'name': '__callback',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_queryId',
    'type': 'bytes32'
  }, {
    'name': '_result',
    'type': 'string'
  }],
  'name': '__callback',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_controller',
    'type': 'address'
  }],
  'name': 'setContractController',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_packs',
    'type': 'address'
  }],
  'name': 'setPacksAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_endpoint',
    'type': 'string'
  }],
  'name': 'updateApiEndpoint',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_wei',
    'type': 'uint256'
  }],
  'name': 'updateOracleGasPrice',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': '_wei',
    'type': 'uint256'
  }],
  'name': 'updateOracleGasLimit',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}];
exports.CryptoCardsOracleABI = CryptoCardsOracleABI;