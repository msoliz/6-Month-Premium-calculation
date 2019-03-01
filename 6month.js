//project should display 6 month premium per vehicle
//it should get sum of all cars in array
//
//if sum is positive, divide remainder between total vehicles and then add per veh
//if sum is negative, divide remainder between veh and the subtract per veh

//display new amounts per veh and verify the add up to monthly premium

//table should be dynamic? already are with bootstrap cards


var months = 6;
var premium = [];
var totalPremium = 0;
var newPremium = [];
var newDifference = 0;
var differenceWithRounding = 0;
var sum = 0;

function pushFunction(){
    premium.push(document.getElementById('premiumInput').valueAsNumber);
    premiumInput.value = '';
}
function push2Function(){
    totalPremium = (document.getElementById('totalPremiumInput').valueAsNumber);
    totalPremiumInput.value = '';
}

function getSum(total, num) {
    sum = total + num;
    return sum;
}

function difference()   {
    newDifference = (totalPremium - premium.reduce(getSum)) / premium.length;
    //rounds decimal place 2, without rounding errors of parseFloat
    differenceWithRounding = Number(Math.round(newDifference+'e2')+'e-2');
    return differenceWithRounding;
}

function calculatePremium() {
    if (premium.length === 0){
        alert('No amount has been entered');
    }   else{
        difference(); 
        document.getElementById('oldPremium').innerHTML = premium;

        if (sum < totalPremium)   {
            newPremium = premium.map(function(newPremium) {
                return newPremium + differenceWithRounding;
            });
            document.getElementById('newPremium').innerHTML = newPremium;
            console.table(newPremium);
        } else if (sum > totalPremium)    {
            newPremium = numbers.map(function(newPremium) {
                return newPremium - differenceWithRounding;
            });
            document.getElementById('newPremium').innerHTML = newPremium;
            console.table(newPremium);
        } else{
            document.getElementById('newPremium').innerHTML = premium;
            console.table(newPremium);
        }
    } 
}

