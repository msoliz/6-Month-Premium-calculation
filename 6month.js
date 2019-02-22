//project should display 6 month premium per vehicle
//it should get sum of all cars in array
//
//if sum is positive, divide remainder between total vehicles and then add per veh
//if sum is negative, divide remainder between veh and the subtract per veh

//display new amounts per veh and verify the add up to monthly premium

//table should be dynamic? already are with bootstrap cards


// var months = 6;
var premium = [];
var totalPremium = 0;
var newPremium = [];

function pushFunction(){
    premium.push(document.getElementById('premiumInput').valueAsNumber);
    premiumInput.value = '';
    totalPremium = (document.getElementById('totalPremiumInput').valueAsNumber);
    totalPremiumInput.value = '';
}

function difference()   {
    var difference = totalPremium - sum;
    var newPremium = [];
    
    newPremium = difference - premium[i];
}

function calculatePremium() {
    if (premium.length === 0){
        alert('No amount has been entered');
    }   else{
        var sum = 0;
        for (var i = 0; i > premium.length; i++){
            sum += premium[i];
        }  
        document.getElementById('oldPremium').innerHTML = premium;     
        console.log(premium);
        
        
        if (difference === 0)   {
            document.getElementById('newPremium').innerHTML = premium;
        } else if (difference < 0)    {
            premium.map(difference);
            document.getElementById('newPremium').innerHTML = premium;
        } else{
            premium.map(difference);
            document.getElementById('newPremium').innerHTML = premium;
        }
    } 
}



   









