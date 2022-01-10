const returnFirstLetter = (data) => data.charAt(0).toUpperCase(),

    showIndianStandardCurrency = (data) => {

        data = data.toString();
        let newData = '',
            i = data.length;
        while (i--) {

            if (i - (data.length - 4) === 0 || newData.includes(',') && i % 2 === 0) {

                newData = `${data.charAt(i)},${newData}`;

            } else {

                newData = data.charAt(i) + newData;

            }

        }
        // eslint-disable-next-line no-irregular-whitespace
        return `₹​${newData}`;

    },

    returnRemainingDaysLeft = (data) => Math.abs(new Date(data.toString()).getDate() - new Date().getDate()),

    donationPerecent = (donationNeeded, donationGained) => Math.floor(donationGained / donationNeeded * 100)

export {
    returnFirstLetter,
    showIndianStandardCurrency,
    returnRemainingDaysLeft,
    donationPerecent
}