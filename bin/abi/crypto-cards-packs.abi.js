"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsPacksABI = void 0;
var CryptoCardsPacksABI = [{
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
    'name': 'cards',
    'type': 'uint256[]'
  }],
  'name': 'OpenedPack',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'owner',
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
    'name': 'price',
    'type': 'uint256'
  }],
  'name': 'PackPriceSet',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'owner',
    'type': 'address'
  }, {
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
    'name': 'price',
    'type': 'uint256'
  }],
  'name': 'PackSale',
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
    'name': 'packId',
    'type': 'uint256'
  }, {
    'indexed': false,
    'name': 'packData',
    'type': 'string'
  }],
  'name': 'ReceivedPromoPack',
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
    'name': 'owner',
    'type': 'address'
  }],
  'name': 'initialize',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'totalMintedPacks',
  'outputs': [{
    'name': '',
    'type': 'uint256'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{
    'name': 'owner',
    'type': 'address'
  }],
  'name': 'balanceOf',
  'outputs': [{
    'name': '',
    'type': 'uint256'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{
    'name': 'tokenId',
    'type': 'uint256'
  }],
  'name': 'ownerOf',
  'outputs': [{
    'name': '',
    'type': 'address'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{
    'name': 'tokenId',
    'type': 'uint256'
  }],
  'name': 'packDataById',
  'outputs': [{
    'name': '',
    'type': 'string'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'packId',
    'type': 'uint256'
  }, {
    'name': 'packPrice',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'updatePackPrice',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'packId',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'openPack',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'controller',
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
    'name': 'oracle',
    'type': 'address'
  }],
  'name': 'setOracleAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'token',
    'type': 'address'
  }],
  'name': 'setCryptoCardsPackToken',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'token',
    'type': 'address'
  }],
  'name': 'setCryptoCardsCardToken',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'gum',
    'type': 'address'
  }],
  'name': 'setGumAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'lib',
    'type': 'address'
  }],
  'name': 'setLibAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'receiver',
    'type': 'address'
  }, {
    'name': 'owner',
    'type': 'address'
  }, {
    'name': 'packId',
    'type': 'uint256'
  }, {
    'name': 'pricePaid',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'transferPackForBuyer',
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
    'name': 'to',
    'type': 'address'
  }, {
    'name': 'packData',
    'type': 'string'
  }],
  'name': 'mintPack',
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
    'name': 'to',
    'type': 'address'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }, {
    'name': 'packData',
    'type': 'string'
  }],
  'name': 'mintPromoPack',
  'outputs': [{
    'name': '',
    'type': 'uint256'
  }],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}];
exports.CryptoCardsPacksABI = CryptoCardsPacksABI;