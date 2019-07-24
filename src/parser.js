/*
BIT-MAP:
      E       G    I   R   G  Y
      22      10   12  10  6  4
[____________|___|____|___|__|_]


22 bits for (max 4,194,304)
	- wrapped ether (divided by 1,000,000)
         4194304 / 1000000 = 4.194304
		   10000 / 1000000 = 0.01
		       1 / 1000000 = 0.000001

10 bits for  (max 1,024)
	- wrapped gum

12 bits for  (max 4,096)
	- card issue

10 bits for  (max 1,024)
	- card rank

6 bits for  (max 64)
	- current generation

4 bits for (max 16)
	- year of issue (0 = 2019)
 */
import bigint from 'big-integer';

import { CC_GLOBAL } from './globals';

export const CryptoCardsParser = {};

CryptoCardsParser.readBits = (num, from, len) => {
    const mask = ((bigint(1).shiftLeft(len)).minus(1)).shiftLeft(from);
    return num.and(mask).shiftRight(from);
};

CryptoCardsParser.parseCard = (cardHash) => {
    const cardInt   = bigint(cardHash, CC_GLOBAL.HEX_BASE);
    const year      = CryptoCardsParser.readBits(cardInt,  0,  4).toJSNumber();
    const gen       = CryptoCardsParser.readBits(cardInt,  4,  6).toJSNumber();
    const rank      = CryptoCardsParser.readBits(cardInt, 10, 10).toJSNumber();
    const issue     = CryptoCardsParser.readBits(cardInt, 20, 12).toJSNumber();
    const gum       = CryptoCardsParser.readBits(cardInt, 32, 10).toJSNumber();
    const eth       = CryptoCardsParser.readBits(cardInt, 42, 22).toJSNumber();
    return {year, gen, rank, issue, gum, eth};
};

CryptoCardsParser.parsePack = (packHash) => {
    const packedCards = packHash.split('.');
    const pack = [];
    for (let i = 0; i < CC_GLOBAL.CARDS_IN_PACK; i++) {
        pack.push(CryptoCardsParser.parseCard(packedCards[i]));
    }
    return pack;
};

CryptoCardsParser.serializeCard = (cardData) => {
    return CryptoCardsParser._getCardAsIntStr(cardData);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CryptoCardsParser._getCardAsIntStr = ({year = 0, gen = 1, rank, issue, gum = 0, eth = 0}) => {
    //
    // From Solidity Contract:
    //      (bits[0] | (bits[1] << 4) | (bits[2] << 10) | (bits[3] << 20) | (bits[4] << 32) | (bits[5] << 42);
    //
    let cardInt = bigint(year);
    cardInt = cardInt.or(bigint(gen).shiftLeft(4));
    cardInt = cardInt.or(bigint(rank).shiftLeft(10));
    cardInt = cardInt.or(bigint(issue).shiftLeft(20));
    cardInt = cardInt.or(bigint(gum).shiftLeft(32));
    cardInt = cardInt.or(bigint(eth).shiftLeft(42));
    return cardInt.toString(CC_GLOBAL.HEX_BASE);
};

CryptoCardsParser._getPackStr = (packData) => {
    const pack = [];
    for (let i = 0; i < CC_GLOBAL.CARDS_IN_PACK; i++) {
        pack.push(CryptoCardsParser._getCardAsIntStr(packData[i]));
    }
    return pack.join('.');
};
