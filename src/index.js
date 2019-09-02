import { CC_GLOBAL } from './globals';

import { CryptoCardsHelpers } from './helpers';
import { CryptoCardsTraits } from './card-traits';
import { CryptoCardsParser } from './parser';
import { CryptoCardsReleaseSchedule } from './release-schedule-2019';
import { CryptoCardsContractFactory } from './crypto-cards-contract-factory';

import { CryptoCardsControllerABI } from './abi/crypto-cards-controller.abi';
import { CryptoCardsTreasuryABI }   from './abi/crypto-cards-treasury.abi';
import { CryptoCardsOracleABI }     from './abi/crypto-cards-oracle.abi';
import { CryptoCardsPacksABI }      from './abi/crypto-cards-packs.abi';
import { CryptoCardsPacksTokenABI } from './abi/crypto-cards-packs-token.abi';
import { CryptoCardsCardsABI }      from './abi/crypto-cards-cards.abi';
import { CryptoCardsCardsTokenABI } from './abi/crypto-cards-cards-token.abi';
import { CryptoCardsGumABI }        from './abi/crypto-cards-gum.abi';
import { CryptoCardsGumTokenABI }   from './abi/crypto-cards-gum-token.abi';
import { CryptoCardsLibABI }        from './abi/crypto-cards-lib.abi';

const CryptoCardsController = CryptoCardsContractFactory.create({addressName: 'CONTROLLER',  abi: CryptoCardsControllerABI});
const CryptoCardsTreasury   = CryptoCardsContractFactory.create({addressName: 'TREASURY',    abi: CryptoCardsTreasuryABI});
const CryptoCardsOracle     = CryptoCardsContractFactory.create({addressName: 'ORACLE',      abi: CryptoCardsOracleABI});
const CryptoCardsPacks      = CryptoCardsContractFactory.create({addressName: 'PACKS',       abi: CryptoCardsPacksABI});
const CryptoCardsPacksToken = CryptoCardsContractFactory.create({addressName: 'PACKS_TOKEN', abi: CryptoCardsPacksTokenABI});
const CryptoCardsCards      = CryptoCardsContractFactory.create({addressName: 'CARDS',       abi: CryptoCardsCardsABI});
const CryptoCardsCardsToken = CryptoCardsContractFactory.create({addressName: 'CARDS_TOKEN', abi: CryptoCardsCardsTokenABI});
const CryptoCardsGum        = CryptoCardsContractFactory.create({addressName: 'GUM',         abi: CryptoCardsGumABI});
const CryptoCardsGumToken   = CryptoCardsContractFactory.create({addressName: 'GUM_TOKEN',   abi: CryptoCardsGumTokenABI});
const CryptoCardsLib        = CryptoCardsContractFactory.create({addressName: 'LIB',         abi: CryptoCardsLibABI});

export {
    CryptoCardsController,
    CryptoCardsTreasury,
    CryptoCardsOracle,
    CryptoCardsPacks,
    CryptoCardsPacksToken,
    CryptoCardsCards,
    CryptoCardsCardsToken,
    CryptoCardsGum,
    CryptoCardsGumToken,
    CryptoCardsLib,
    CryptoCardsHelpers,
    CryptoCardsTraits,
    CryptoCardsParser,
    CryptoCardsReleaseSchedule,
    CC_GLOBAL
}

