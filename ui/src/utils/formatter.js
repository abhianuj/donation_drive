function sum(a, b) {
    return a + b;
}

const returnFirstLetter = (data)=>{
    return data.charAt(0).toUpperCase();
}

const showIndianStandardCurrency = (data) => {
    data = data.toString();
    let newData='';
    let i = data.length;
    while(i--){
        if(i-(data.length-4)===0 || (newData.includes(',') && i%2===0)){
            newData = data.charAt(i) + ',' + newData;
        } else {
            newData = data.charAt(i) + newData;
        }
    }
    return "₹​" + newData;
}

const returnRemainingDaysLeft = (data)=>{
    return Math.abs(new Date(data.toString()).getDate()-new Date().getDate());
}

const donationPerecent = (donationNeeded, donationGained) => {
    return Math.floor((donationGained/donationNeeded)*100);
}

export {
    sum,
    returnFirstLetter,
    showIndianStandardCurrency,
    returnRemainingDaysLeft,
    donationPerecent
}