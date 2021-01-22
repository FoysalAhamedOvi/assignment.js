                //Problem 1 kilometerToMeter //

function kilometerToMeter (kilo){
    var meter = kilo * 1000;
    return meter;
}


                //Prgram 2 hotelBudget//

function budgetCalculator(watch, phone, laptop){
    var watchMoney = 50;
    var watchCost = watchMoney * watch
    console.log (arguments[0]);
    
    var phoneMoney = 100;
    var phoneCost = phoneMoney * phone;
    console.log (arguments[1]);
    
    var laptopMoney = 500;
    var laptopCost = laptopMoney * laptop;
    console.log (arguments[2]);
    
    var total = watchCost + phoneCost + laptopCost;
    return total;
}





                            //program 3 hotelCost//

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

        //program 4 




