export const CryptoCardsLibABI = [
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'isSigner',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'isOwner',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceSigner',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'addSigner',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'SignerAdded',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'SignerRemoved',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'owner',
                'type': 'address'
            }
        ],
        'name': 'initialize',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'owner',
                'type': 'address'
            }
        ],
        'name': 'getPurchasedPackCount',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'index',
                'type': 'uint8'
            }
        ],
        'name': 'getPromoCode',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'index',
                'type': 'uint8'
            }
        ],
        'name': 'getPromoDiscount',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'index',
                'type': 'uint8'
            }
        ],
        'name': 'getReferralLevel',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'getPrice',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'promoCode',
                'type': 'uint256'
            },
            {
                'name': 'hasReferral',
                'type': 'bool'
            }
        ],
        'name': 'getPricePerPack',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'referrer',
                'type': 'address'
            },
            {
                'name': 'cost',
                'type': 'uint256'
            }
        ],
        'name': 'getAmountForReferrer',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 's',
                'type': 'string'
            }
        ],
        'name': 'strToUint',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_b',
                'type': 'string'
            }
        ],
        'name': 'bytesToUint',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'owner',
                'type': 'address'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'incrementPurchasedPackCount',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'price',
                'type': 'uint256'
            }
        ],
        'name': 'updatePricePerPack',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'index',
                'type': 'uint8'
            },
            {
                'name': 'code',
                'type': 'uint256'
            }
        ],
        'name': 'updatePromoCode',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'controller',
                'type': 'address'
            }
        ],
        'name': 'setContractController',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'index',
                'type': 'uint8'
            },
            {
                'name': 'discount',
                'type': 'uint256'
            }
        ],
        'name': 'updatePromoDiscount',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'level',
                'type': 'uint8'
            },
            {
                'name': 'amount',
                'type': 'uint256'
            }
        ],
        'name': 'updateReferralLevels',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }
];
