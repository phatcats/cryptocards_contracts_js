export const CryptoCardsCardsABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'MAX_TRADE_RANKS',
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
                'name': 'owner',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'uuid',
                'type': 'bytes16'
            },
            {
                'indexed': false,
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'price',
                'type': 'uint256'
            }
        ],
        'name': 'CardPriceSet',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'uuid',
                'type': 'bytes16'
            },
            {
                'indexed': false,
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'cardRank',
                'type': 'uint16'
            },
            {
                'indexed': false,
                'name': 'cardGens',
                'type': 'uint8[]'
            },
            {
                'indexed': false,
                'name': 'cardYears',
                'type': 'uint8[]'
            }
        ],
        'name': 'CardTradeValueSet',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address'
            },
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
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'price',
                'type': 'uint256'
            }
        ],
        'name': 'CardSale',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address'
            },
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
                'name': 'ownerCardId',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'tradeCardId',
                'type': 'uint256'
            }
        ],
        'name': 'CardTrade',
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
        'name': 'totalMintedCards',
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
                'name': 'owner',
                'type': 'address'
            }
        ],
        'name': 'balanceOf',
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
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'ownerOf',
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
        'inputs': [
            {
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'getTotalIssued',
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
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'isTokenPrinted',
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
        'inputs': [
            {
                'name': 'tokenA',
                'type': 'uint256'
            },
            {
                'name': 'tokenB',
                'type': 'uint256'
            }
        ],
        'name': 'canCombine',
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
        'inputs': [
            {
                'name': 'owner',
                'type': 'address'
            }
        ],
        'name': 'getEarnedGum',
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
                'name': 'token',
                'type': 'address'
            }
        ],
        'name': 'setCryptoCardsCardToken',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'lib',
                'type': 'address'
            }
        ],
        'name': 'setLibAddress',
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
                'name': 'owner',
                'type': 'address'
            },
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
                'name': 'receiver',
                'type': 'address'
            },
            {
                'name': 'owner',
                'type': 'address'
            },
            {
                'name': 'cardId',
                'type': 'uint256'
            },
            {
                'name': 'pricePaid',
                'type': 'uint256'
            },
            {
                'name': 'uuid',
                'type': 'bytes16'
            }
        ],
        'name': 'transferCardForBuyer',
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
                'name': 'owner',
                'type': 'address'
            },
            {
                'name': 'ownerCardId',
                'type': 'uint256'
            },
            {
                'name': 'desiredCardId',
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
                'name': 'owner',
                'type': 'address'
            },
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
                'name': 'owner',
                'type': 'address'
            },
            {
                'name': 'tokenA',
                'type': 'uint256'
            },
            {
                'name': 'tokenB',
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
                'name': 'owner',
                'type': 'address'
            },
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
    }
];

