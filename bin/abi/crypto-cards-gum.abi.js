'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CryptoCardsGumABI = exports.CryptoCardsGumABI = [{
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
    'inputs': [{
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'gumFlavorAvailable',
    'outputs': [{
        'name': '',
        'type': 'bool'
    }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'gumFlavorName',
    'outputs': [{
        'name': '',
        'type': 'bytes32'
    }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'gumFlavorAddress',
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
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'gumPerPack',
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
    }, {
        'name': 'flavor',
        'type': 'uint256'
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
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'packGumAvailable',
    'outputs': [{
        'name': '',
        'type': 'uint256'
    }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': 'packs',
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
        'name': 'cards',
        'type': 'address'
    }],
    'name': 'setCardsAddress',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': 'token',
        'type': 'address'
    }, {
        'name': 'flavor',
        'type': 'uint256'
    }, {
        'name': 'flavorName',
        'type': 'bytes32'
    }],
    'name': 'setGumToken',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': 'flavor',
        'type': 'uint256'
    }, {
        'name': 'amount',
        'type': 'uint256'
    }],
    'name': 'setGumPerPack',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': 'flavor',
        'type': 'uint256'
    }],
    'name': 'setEarnedGumFlavor',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': 'to',
        'type': 'address'
    }, {
        'name': 'gumAmount',
        'type': 'uint256'
    }],
    'name': 'transferCardGum',
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
        'name': 'packCount',
        'type': 'uint256'
    }],
    'name': 'transferPackGum',
    'outputs': [{
        'name': '',
        'type': 'uint256'
    }],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}];