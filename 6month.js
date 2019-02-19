//project should display 6 month premium per vehicle
//it should get amount of vehicles ?? just enter amounts into array

//it should get 6month term premium of all cars in array
//it should get 6month term premium and divide per 6 -- per vehicle
//if difference is positive, divide remainder between total vehicles and then add per veh
//if diff negative, divide remainder between veh and the subtract per veh

//display new amounts per veh and verify the add up to monthly premium

//table should be dynamic? already are with bootstrap cards


// var months = 6;
var premium = [];
var sum = 0;

function pushFunction(){
    
    premium.push(document.getElementById('premiumInput').value);
    premiumInput.value = '';
    sum = premium.reduce(sumFunction);

    console.log(premium);
}

function calculatePremium() {

}

function sumFunction(total, value)  {
    return total + value;
}

// if (premium.length === 0){
//     console.log('no monies have been entered');
// }   else{
//     for (var i = 0; i > premium.length; i++){
//         var newPremium = premium[i] / months;
//         console.log(newPremium); 
//     }
// }    









