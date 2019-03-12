//project should display 6 month premium per vehicle
//it should divide premium of veh by 6 monthly payments
//if total of newly divided premiums less than total premium
//get difference and add back to divided premiums
//display new amounts per veh and verify the add up to monthly premium

var MONTHS = 6;
var premium = [];
var newPremium = [];
var monthlyPayment = 0;
var dividedPremiums = [];
var sumOfDividedPremiums = 0;
var monthlyPremiumDifference = 0;
var finalPremium = [];
var finalDifference = 0;

function pushFunction(){
    premium.push(document.getElementById('premiumInput').valueAsNumber);
    premiumInput.value = '';
}
function push2Function(){
    monthlyPayment = (document.getElementById('monthlyPaymentInput').valueAsNumber);
    monthlyPaymentInput.value = '';
}

function dividePremium()    {
    newPremium = premium.map(function(num){
        newPremium = num / MONTHS;
        //rounds to 2 decimal places, avoids rounding errors of parseFloat
        newPremium = Number(Math.round(newPremium +'e2') +'e-2');
        return newPremium;
    });
    sumOfDividedPremiums = newPremium.reduce(getSum);
    monthlyPremiumDifference = monthlyPayment - sumOfDividedPremiums;
    finalDifference = monthlyPremiumDifference / newPremium.length;
} 

function getSum(total, acc) {
    return total + acc;
}

function positiveMap(num)  { 
    finalPremium = newPremium.map(function(num){
        finalPremium = num + finalDifference;
        finalPremium = Number(Math.round(finalPremium +'e2')+'e-2');
        return finalPremium;
    });
   
}
function negativeMap(num)  {
    finalPremium = newPremium.map(function(num){
        finalDifference = Number(Math.abs(finalDifference));
        finalPremium = num - finalDifference;
        finalPremium = Number(Math.round(finalPremium +'e2')+'e-2');
        return finalPremium;
    });
}

function calculatePremium() {
    if (premium.length === 0){
        alert('No amount has been entered');
    }   else{
        dividePremium();
        document.getElementById('oldPremium').innerHTML = newPremium;
        if (monthlyPremiumDifference > 0)   {
            positiveMap();
            document.getElementById('newPremium').innerHTML = finalPremium;
        } else if (monthlyPremiumDifference < 0)    {
            negativeMap();
            document.getElementById('newPremium').innerHTML = finalPremium;
        } else{
            document.getElementById('newPremium').innerHTML = newPremium;
        }
    } 
}


