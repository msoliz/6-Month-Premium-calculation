//project should display 6 month premium per vehicle
//it should get sum of all cars in array
//
//if sum is positive, divide remainder between total vehicles and then add per veh
//if sum is negative, divide remainder between veh and the subtract per veh

//display new amounts per veh and verify the add up to monthly premium

var months = 6;
var premium = [];
var totalPremium = 0;
var sum = 0;
var newDifference = 0;
var differenceWithRounding = 0;

function pushFunction(){
    premium.push(document.getElementById('premiumInput').valueAsNumber);
    premiumInput.value = '';
}
function push2Function(){
    totalPremium = (document.getElementById('totalPremiumInput').valueAsNumber);
    totalPremiumInput.value = '';
}

function getSum(total, acc) {
    return total + acc;
}

function difference()   {
    sum = premium.reduce(getSum);
    newDifference = (totalPremium - sum) / premium.length;
    //rounds decimal place 2, without rounding errors of parseFloat
    differenceWithRounding = Number(Math.round(newDifference+'e2')+'e-2');
    return differenceWithRounding;
}
function positiveMap(num)  {
    differenceWithRounding = Number(Math.round(newDifference+'e2')+'e-2');
    return num + differenceWithRounding;
}
function negativeMap()  {
    return premium - differenceWithRounding;
}

function calculatePremium() {
    if (premium.length === 0){
        alert('No amount has been entered');
    }   else{
        difference();
        document.getElementById('oldPremium').innerHTML = premium;
        if (sum < totalPremium)   {
            document.getElementById('newPremium').innerHTML = premium.map(positiveMap);
            console.table(premium.map(positiveMap));
        } else if (sum > totalPremium)    {
            document.getElementById('newPremium').innerHTML = premium;
        } else{
            document.getElementById('newPremium').innerHTML = premium;
        }
    } 
}


