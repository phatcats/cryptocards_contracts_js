
import bigint from 'big-integer';
import * as _ from 'lodash';

import { CC_GLOBAL } from './globals';

class CryptoCardsTraits {
    static combineTraits(traits) {
        return _.reduce(traits, (sum, n) => sum.or(n), bigint(0));
    }

    static hasTrait(traits, trait) {
        if (_.isString(traits) || _.isNumber(traits)) {
            traits = CryptoCardsTraits.toTraits(traits);
        }
        return traits.and(trait).eq(trait);
    }

    static toTraits(traits, base = CC_GLOBAL.NUM_BASE) {
        return bigint(traits, base);
    }

    static toString(traits) {
        return bigint(traits).toString(CC_GLOBAL.NUM_BASE);
    }
}


//
// Trait Definitions
//

// Major Features
CryptoCardsTraits.FOUNDERS_TOKEN       = bigint(1).shiftLeft(0);
CryptoCardsTraits.GLITCH_CARD          = bigint(1).shiftLeft(1);
CryptoCardsTraits.REVERSED_THEME       = bigint(1).shiftLeft(14);
CryptoCardsTraits.FOR_TESTING          = bigint(1).shiftLeft(75);


export { CryptoCardsTraits };
