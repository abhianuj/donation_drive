/*eslint-disable*/
import {donationPerecent, returnFirstLetter, returnRemainingDaysLeft, showIndianStandardCurrency} from './../utils/formatter';


test(
    'Should return the first letter of the word with capitalizaion',
    () => {

        expect(returnFirstLetter('abhi')).toBe('A');

    }
);

test(
    'Should return the remaining time according to date today',
    () => {

        expect(returnRemainingDaysLeft(new Date().toString())).toBe(0);

    }
);

test(
    'Should return the numbers in indian standard of displaying money with rupee symbol if the amount is 0',
    () => {

        expect(showIndianStandardCurrency(0)).toBe(`₹​${0}`);

    }
);
test(
    'Should return the numbers in indian standard of displaying money with rupee symbol if the amount is 10,00,000',
    () => {

        expect(showIndianStandardCurrency(10000000)).toBe('₹​1,00,00,000');

    }
);

test(
    'Should return donation percent for 20% donation',
    () => {

        expect(donationPerecent(
            10,
            2
        )).toBe(20);

    }
);
test(
    'Should return donation percent for some donations',
    () => {

        expect(donationPerecent(
            10,
            5
        )).toBe(50);

    }
);