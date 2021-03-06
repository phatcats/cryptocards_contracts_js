"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsControllerABI = void 0;
var CryptoCardsControllerABI = [{
  'constant': false,
  'inputs': [],
  'name': 'unpause',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{
    'name': 'account',
    'type': 'address'
  }],
  'name': 'isPauser',
  'outputs': [{
    'name': '',
    'type': 'bool'
  }],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'paused',
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
  'name': 'renouncePauser',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'renounceOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'account',
    'type': 'address'
  }],
  'name': 'addPauser',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [],
  'name': 'pause',
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
    'name': 'pricePaid',
    'type': 'uint256'
  }, {
    'indexed': false,
    'name': 'referredBy',
    'type': 'address'
  }, {
    'indexed': false,
    'name': 'promoCode',
    'type': 'uint256'
  }],
  'name': 'BuyNewPack',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': false,
    'name': 'account',
    'type': 'address'
  }],
  'name': 'Paused',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': false,
    'name': 'account',
    'type': 'address'
  }],
  'name': 'Unpaused',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'account',
    'type': 'address'
  }],
  'name': 'PauserAdded',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'name': 'account',
    'type': 'address'
  }],
  'name': 'PauserRemoved',
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
  'inputs': [],
  'name': 'initialize',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
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
  'name': 'getVersion',
  'outputs': [{
    'name': '',
    'type': 'string'
  }],
  'payable': false,
  'stateMutability': 'pure',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'referredBy',
    'type': 'address'
  }, {
    'name': 'promoCode',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'buyPackOfCards',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'owner',
    'type': 'address'
  }, {
    'name': 'packId',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'buyPackFromOwner',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'cardOwner',
    'type': 'address'
  }, {
    'name': 'cardId',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'buyCardFromOwner',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'owner',
    'type': 'address'
  }, {
    'name': 'ownerCardId',
    'type': 'uint256'
  }, {
    'name': 'tradeCardId',
    'type': 'uint256'
  }, {
    'name': 'uuid',
    'type': 'bytes16'
  }],
  'name': 'tradeCardForCard',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{
    'name': 'oracle',
    'type': 'address'
  }, {
    'name': 'cards',
    'type': 'address'
  }, {
    'name': 'packs',
    'type': 'address'
  }, {
    'name': 'treasury',
    'type': 'address'
  }, {
    'name': 'lib',
    'type': 'address'
  }],
  'name': 'setContractAddresses',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}];
exports.CryptoCardsControllerABI = CryptoCardsControllerABI;