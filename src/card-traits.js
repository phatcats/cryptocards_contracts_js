
import bigint from 'big-integer';
import * as _ from 'lodash';

import { CC_GLOBAL } from './global';

class CryptoCardsTraits {
    static combineTraits(traits) {
        return _.reduce(traits, (sum, n) => sum.or(n), bigint(0));
    }

    static hasTrait(traits, trait) {
        return traits.and(trait).eq(trait);
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

// Badges
CryptoCardsTraits.WRAPPED_ETHER        = bigint(1).shiftLeft(20);
CryptoCardsTraits.COMBINED_CARD        = bigint(1).shiftLeft(21);



export { CryptoCardsTraits };
