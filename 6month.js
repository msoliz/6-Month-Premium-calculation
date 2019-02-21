//project should display 6 month premium per vehicle
//it should get sum of all cars in array
//
//if sum is positive, divide remainder between total vehicles and then add per veh
//if sum is negative, divide remainder between veh and the subtract per veh

//display new amounts per veh and verify the add up to monthly premium

//table should be dynamic? already are with bootstrap cards


// var months = 6;
var premium = [];
var sum = 0;
function pushFunction(){
    
    premium.push(document.getElementById('premiumInput').value);
    premiumInput.value = '';
}


function calculatePremium() {
    if (premium.length === 0){
        console.log('No amount has been entered');
    }   else{
        for (var i = 0; i > premium.length; i++){
                sum = premium.reduce( function(total, amount){
                return total + amount;
                
            });
        }
        console.log(sum);
    } 
    
}



   









