"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CryptoCardsReleaseSchedule = void 0;

var _ = _interopRequireWildcard(require("lodash"));

var _globals = require("./globals");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var CryptoCardsReleaseSchedule = {
  // Current Year of Released Cards
  currentYear: 0,
  // 2019
  currentRewardEra: 0,
  // Available Card-Ranks (time-released)
  availableCardRanks: [],
  // The number of Issued Cards per Rank per Generation
  //   Generations start at 1 since 0 has already been distributed
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // TODO: For Testing
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //
  cardsPerGeneration: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // TODO: For Production
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // cardsPerGeneration: [0, 25, 40, 65, 100, 150, 200, 300, 400, 600, 800, 1001],
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Card-Type Weight is based on the % of Total Available Cards per Type (1 - 5)
  //   1.2%  ==  12  ==    0 +  12  =  12
  //   7.9%  ==  79  ==   12 +  79  =  91
  //  14.5%  == 145  ==   91 + 145  =  236
  //  26.4%  == 264  ==  236 + 264  =  500
  //  50.0%  == 500  ==  500 + 500  =  1000
  cardTypeWeight: [0, 12, 91, 236, 500],
  gumPerGeneration: [[0, 0], [12, 25], [12, 24], [12, 23], [10, 22], [10, 21], [10, 20], [10, 19], [8, 18], [8, 17], [8, 16], [8, 15], [8, 14]],
  // Available Rewards for Cards
  availableWrappedEther: [{
    rewardEra: 0,
    rewardAmounts: [// Total: 1.465 ETH
    {
      eth: 0.100,
      max: 3,
      weight: 850
    }, // 15.0%
    {
      eth: 0.050,
      max: 10,
      weight: 875
    }, // 12.5%
    {
      eth: 0.025,
      max: 14,
      weight: 900
    }, // 10.0%
    {
      eth: 0.010,
      max: 18,
      weight: 925
    }, //  7.5%
    {
      eth: 0.005,
      max: 27,
      weight: 950 //  5.0%

    }]
  }],
  // 200 random numbers between 0-999; each card has odds:
  //      - Legendary: 30%
  //      - Epic:      25%
  //      - Rare:      20%
  //      - Scarce:    15%
  //      - Common:    10%
  foundersTokenOdds: [700, 750, 800, 850, 900],
  orderByType: function orderByType(cardRanks) {
    var ranks = _.cloneDeep(cardRanks);

    var ranksByType = [];

    var _loop = function _loop(i) {
      ranksByType.push(_.remove(ranks, function (rank) {
        return rank <= _globals.CC_GLOBAL.CARD_TYPE_RANGES[i][1];
      }));
    };

    for (var i = 0; i < _globals.CC_GLOBAL.CARD_TYPE_RANGES.length; i++) {
      _loop(i);
    }

    return ranksByType;
  },
  getWeightedCardTypes: function getWeightedCardTypes() {
    return CryptoCardsReleaseSchedule.cardTypeWeight;
  },
  getAvailableCardRanks: function getAvailableCardRanks(_ref) {
    var generationTime = _ref.generationTime;
    return _.sortBy(_.flatMapDeep(CryptoCardsReleaseSchedule.availableCardRanks, function (available) {
      return generationTime >= available.releaseDate ? available.cardsReleased : [];
    }));
  },
  getLastReleaseData: function getLastReleaseData(_ref2) {
    var generationTime = _ref2.generationTime;

    var current = _.findIndex(CryptoCardsReleaseSchedule.availableCardRanks, function (available) {
      return generationTime >= available.releaseDate;
    });

    if (current === -1) {
      current = 1;
    }

    return CryptoCardsReleaseSchedule.availableCardRanks[current - 1];
  },
  getNextReleaseData: function getNextReleaseData(_ref3) {
    var generationTime = _ref3.generationTime;

    var current = _.findIndex(CryptoCardsReleaseSchedule.availableCardRanks, function (available) {
      return generationTime >= available.releaseDate;
    });

    if (current === -1 || current === _.size(CryptoCardsReleaseSchedule.availableCardRanks) - 1) {
      return false;
    }

    return CryptoCardsReleaseSchedule.availableCardRanks[current + 1];
  },
  getAvailableCardRanksByType: function getAvailableCardRanksByType(generationTime) {
    var availableCardRanks = CryptoCardsReleaseSchedule.getAvailableCardRanks({
      generationTime: generationTime
    });
    return CryptoCardsReleaseSchedule.orderByType(availableCardRanks);
  },
  getAvailableWrappedEther: function getAvailableWrappedEther(_ref4) {
    var cardType = _ref4.cardType;
    var available = CryptoCardsReleaseSchedule.availableWrappedEther[CryptoCardsReleaseSchedule.currentRewardEra];
    return available.rewardAmounts[cardType];
  },
  getWrappedEtherForStorage: function getWrappedEtherForStorage(wrappedEth) {
    return wrappedEth * _globals.CC_GLOBAL.WRAPPED_ETH_MULT;
  },
  getCardGeneration: function getCardGeneration(_ref5) {
    var issued = _ref5.issued;

    for (var i = 0; i < CryptoCardsReleaseSchedule.cardsPerGeneration.length; i++) {
      if (issued <= CryptoCardsReleaseSchedule.cardsPerGeneration[i]) {
        return i;
      }
    }

    return 0;
  },
  getGumRangeForGeneration: function getGumRangeForGeneration(generation) {
    return CryptoCardsReleaseSchedule.gumPerGeneration[generation];
  },
  cardIssueByGeneration: function cardIssueByGeneration(_ref6) {
    var issued = _ref6.issued,
        _ref6$gen = _ref6.gen,
        gen = _ref6$gen === void 0 ? 0 : _ref6$gen;

    if (gen === 0) {
      gen = CryptoCardsReleaseSchedule.getCardGeneration({
        issued: issued
      });
    }

    return issued - CryptoCardsReleaseSchedule.cardsPerGeneration[gen - 1];
  },
  getFoundersTokenOdds: function getFoundersTokenOdds(_ref7) {
    var cardType = _ref7.cardType;
    return CryptoCardsReleaseSchedule.foundersTokenOdds[cardType];
  }
}; // Rank is 1-based

exports.CryptoCardsReleaseSchedule = CryptoCardsReleaseSchedule;
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 01 2019 00:00:00 GMT').getTime(),
  // Bitcoin, Monero, IOTA, DASH, ZCash, Waves, Verge, Komodo, SiaCoin, Ark, Status, Golem, Syscoin,
  // TenX, Kyber Network, Enigma, Obyte, NXT, FunFair, Dragonchain, Namecoin, Ripio, Dropil, Melon,
  // Steem, Pillar, District0x, IoT Chain, WePower, FLO, DATA, Lunyr
  cardsReleased: [[0], [12, 13, 14, 21, 22], [48, 49, 51, 54, 56, 58], [99, 100, 101, 102, 103, 104, 105, 111], [165, 166, 167, 171, 172, 176, 191, 193, 199, 200, 210, 211]]
});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 2 2019 00:00:00 GMT').getTime(),
  cardsReleased: [225] // Bitcore (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 4 2019 00:00:00 GMT').getTime(),
  cardsReleased: [26] // Basic Attention Token (Epic)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 7 2019 00:00:00 GMT').getTime(),
  cardsReleased: [227, 82] // Etherparty (Common), Veritaseum (Rare)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 12 2019 00:00:00 GMT').getTime(),
  cardsReleased: [131] // Gemini (Scarce)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 17 2019 00:00:00 GMT').getTime(),
  cardsReleased: [1] // Ethereum (Legendary)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 22 2019 00:00:00 GMT').getTime(),
  cardsReleased: [229, 62] // Counterparty (Common), Maidsafe (Rare)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Sep 27 2019 00:00:00 GMT').getTime(),
  cardsReleased: [214] // Monetha (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 1 2019 00:00:00 GMT').getTime(),
  cardsReleased: [137, 231] // Gnosis (Scarce), Shift (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 5 2019 00:00:00 GMT').getTime(),
  cardsReleased: [29] // OmiseGo (Epic)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 10 2019 00:00:00 GMT').getTime(),
  cardsReleased: [83, 217] // Reddcoin (Rare), Blox (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 15 2019 00:00:00 GMT').getTime(),
  cardsReleased: [234] // Wings (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 20 2019 00:00:00 GMT').getTime(),
  cardsReleased: [25, 139] // Doge (Epic), Aragon (Scarce)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 25 2019 00:00:00 GMT').getTime(),
  cardsReleased: [235] // Potcoin (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Oct 30 2019 00:00:00 GMT').getTime(),
  cardsReleased: [67, 112] // Decentraland (Rare), Civic (Scarce)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 4 2019 00:00:00 GMT').getTime(),
  cardsReleased: [86] // Bancor (Rare)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 9 2019 00:00:00 GMT').getTime(),
  cardsReleased: [219, 240] // Substratum (Common), Primecoin (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 14 2019 00:00:00 GMT').getTime(),
  cardsReleased: [34] // 0x (Epic)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 19 2019 00:00:00 GMT').getTime(),
  cardsReleased: [120, 241] // Edgeless (Scarce), NAGA (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 24 2019 00:00:00 GMT').getTime(),
  cardsReleased: [89] // DigixDao (Rare)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Nov 29 2019 00:00:00 GMT').getTime(),
  cardsReleased: [146, 221] // Storm (Scarce), LBRY (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Dec 4 2019 00:00:00 GMT').getTime(),
  cardsReleased: [218, 244] // Polis (Common), BlackCoin (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Dec 9 2019 00:00:00 GMT').getTime(),
  cardsReleased: [80, 249] // Loom (Rare), Feathercoin (Common)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Dec 14 2019 00:00:00 GMT').getTime(),
  cardsReleased: [114, 154] // Kin (Scarce), Salt (Scarce)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Dec 19 2019 00:00:00 GMT').getTime(),
  cardsReleased: [90, 126] // Storj (Rare), Ethos (Scarce)

});
CryptoCardsReleaseSchedule.availableCardRanks.push({
  releaseDate: new Date('Dec 24 2019 00:00:00 GMT').getTime(),
  cardsReleased: [4] // Litecoin (Legendary)

});