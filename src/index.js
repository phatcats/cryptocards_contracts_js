import 'babel-polyfill';

import { CryptoCardsHelpers } from './helpers';
import { CryptoCardsContractFactory } from './crypto-cards-contract-factory';

import { CryptoCardsControllerABI } from './crypto-cards-controller.abi';
import { CryptoCardsTreasuryABI }   from './crypto-cards-treasury.abi';
import { CryptoCardsOracleABI }     from './crypto-cards-oracle.abi';
import { CryptoCardsPacksABI }      from './crypto-cards-packs.abi';
import { CryptoCardsCardsABI }      from './crypto-cards-cards.abi';
import { CryptoCardsGumABI }        from './crypto-cards-gum.abi';
import { CryptoCardsLibABI }        from './crypto-cards-lib.abi';

const CryptoCardsController = CryptoCardsContractFactory.create({addressName: 'CONTROLLER', abi: CryptoCardsControllerABI});
const CryptoCardsTreasury   = CryptoCardsContractFactory.create({addressName: 'TREASURY',   abi: CryptoCardsTreasuryABI});
const CryptoCardsOracle     = CryptoCardsContractFactory.create({addressName: 'ORACLE',     abi: CryptoCardsOracleABI});
const CryptoCardsPacks      = CryptoCardsContractFactory.create({addressName: 'PACKS',      abi: CryptoCardsPacksABI});
const CryptoCardsCards      = CryptoCardsContractFactory.create({addressName: 'CARDS',      abi: CryptoCardsCardsABI});
const CryptoCardsGum        = CryptoCardsContractFactory.create({addressName: 'GUM',        abi: CryptoCardsGumABI});
const CryptoCardsLib        = CryptoCardsContractFactory.create({addressName: 'LIB',        abi: CryptoCardsLibABI});

export {
    CryptoCardsController,
    CryptoCardsTreasury,
    CryptoCardsOracle,
    CryptoCardsPacks,
    CryptoCardsCards,
    CryptoCardsGum,
    CryptoCardsLib,
    CryptoCardsHelpers
}

