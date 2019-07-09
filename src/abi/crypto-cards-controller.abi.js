export const CryptoCardsControllerABI = [
    {
        'constant': false,
        'inputs': [],
        'name': 'unpause',
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
        'name': 'isPauser',
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
        'name': 'paused',
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
        'name': 'renouncePauser',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
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
        'constant': false,
        'inputs': [
            {
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'addPauser',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'pause',
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
                'name': 'uuid',
                'type': 'bytes16'
            },
            {
                'indexed': false,
                'name': 'pricePaid',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'referredBy',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'promoCode',
                'type': 'uint256'
            }
        ],
        'name': 'BuyNewPack',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Paused',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'account',
                'type': 'address'
            }
        ],
        'name': 'Unpaused',
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
        'name': 'PauserAdded',
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
        'name': 'PauserRemoved',
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
        'constant': false,
        'inputs': [],
        'name': 'initialize',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'getVersion',
        'outputs': [
            {
                'name': '',
                'type': 'string'
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
                'name': 'packId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'clearPackPrice',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'packId',
                'type': 'uint256'
            },
            {
                'name': 'packPrice',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'updatePackPrice',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'clearCardPrice',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'cardPrice',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'updateCardPrice',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'clearCardTradeValue',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'cardRank',
                'type': 'uint16'
            },
            {
                'name': 'cardGens',
                'type': 'uint8[]'
            },
            {
                'name': 'cardYears',
                'type': 'uint8[]'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'updateCardTradeValue',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
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
                'name': 'packId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'buyPackFromOwner',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
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
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'buyCardFromOwner',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
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
                'name': 'ownerCardId',
                'type': 'uint256'
            },
            {
                'name': 'tradeCardId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'tradeCardForCard',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'referredBy',
                'type': 'address'
            },
            {
                'name': 'promoCode',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'buyPackOfCards',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'packId',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'openPack',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardA',
                'type': 'uint256'
            },
            {
                'name': 'cardB',
                'type': 'uint256'
            }
        ],
        'name': 'combineCards',
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
                'name': 'cardIds',
                'type': 'uint256[]'
            }
        ],
        'name': 'printCards',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'cardIds',
                'type': 'uint256[]'
            }
        ],
        'name': 'meltCards',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'oracle',
                'type': 'address'
            },
            {
                'name': 'cards',
                'type': 'address'
            },
            {
                'name': 'packs',
                'type': 'address'
            },
            {
                'name': 'treasury',
                'type': 'address'
            },
            {
                'name': 'lib',
                'type': 'address'
            }
        ],
        'name': 'setContractAddresses',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }
];

