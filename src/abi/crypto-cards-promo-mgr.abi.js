export const CryptoCardsPromoMgrABI = [
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
                'name': 'receiver',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'promoCode',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 'packId',
                'type': 'uint256'
            }
        ],
        'name': 'PromoPackTransferred',
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
        'inputs': [],
        'name': 'isReady',
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
        'name': 'getPromoPackHolder',
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
        'name': 'getValidPromoCodesCount',
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
        'name': 'getAvailablePacksCount',
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
        'constant': false,
        'inputs': [
            {
                'name': 'readyState',
                'type': 'bool'
            }
        ],
        'name': 'setReadyState',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'packsToken',
                'type': 'address'
            }
        ],
        'name': 'setPacksToken',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'packHolder',
                'type': 'address'
            }
        ],
        'name': 'setPromoPackHolder',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'codes',
                'type': 'bytes32[]'
            }
        ],
        'name': 'setValidPromoCodes',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'promoCode',
                'type': 'bytes32'
            }
        ],
        'name': 'claimPromoPack',
        'outputs': [
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }
];
