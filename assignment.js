// https://github.com/FoysalAhamedOvi/assignment.js                



// solution 1 kilometerToMeter 

function kilometerToMeter (kilo){
    var meter = kilo * 1000;
    return meter;
}


 // Solution 2 budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var watchMoney = 50;
    var watchCost = watchMoney * watch
    firstBuy = (arguments[0]);
    
    var phoneMoney = 100;
    var phoneCost = phoneMoney * phone;
    secondBuy = (arguments[1]);
    
    var laptopMoney = 500;
    var laptopCost = laptopMoney * laptop;
    thirdBuy = (arguments[2]);
    
    total = watchCost + phoneCost + laptopCost;
    return total;
}



//Solution 3 hotelCost//

function hotelCost (days){
    var money = 0;
    if(days <= 10){
        money = days * 100; 
    } else if (days <= 20){
        var withoutOffer = 10 * 100;
        var remainingDays = days - 10;
        var simpleOffer = remainingDays * 80 ;
        money = withoutOffer + simpleOffer;
    } else{
        var withoutOffer = 10 * 100;
        var simpleOffer = 10 * 80;
        var remainingDays = days - 20;
        var bumperOffer = remainingDays * 50;
        money = withoutOffer + simpleOffer + bumperOffer;
    }
    return money;
}


 // Solution 4 megaFriend

var friends = ["Foysal", "Ahamed", "Ovi", "Taskinur", "Rahman", "Readoy"];
function megaFriend(friends){
    var max = friends[0];
    for (var i = 0; i < friends.length; i++){
        var element = friends[i];
        if (element.length > max.length){
            max = element;
            
        }
    }
    return max;
    }

    // I tried to solve program 4 last 4-5hours but I couldn't solve the program. When you sent me your feedback please give me the solution. 
    




