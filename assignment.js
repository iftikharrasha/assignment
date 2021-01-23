//https://github.com/iftikharrasha/assignment

function kilometerToMeter(length){
        return length*1000;
}

function budgetCalculator(watch, mobile, laptop){
    var absWatch = Math.abs(watch);     //handling negative inputs
    var absMobile = Math.abs(mobile);   //handling negative inputs
    var absLaptop = Math.abs(laptop);   //handling negative inputs

    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;
    totalBudget = priceOfWatch*absWatch + priceOfMobile*absMobile + priceOfLaptop*absLaptop;
    return totalBudget;
}

function hotelCost(day){
    var absDay = Math.abs(day);         //handling negative inputs
    var totalCost,mod;
    if(absDay<=10){
        totalCost = absDay*100;
        return totalCost;
    }else if(absDay>10 && absDay<20){
        mod = absDay % 10;
        totalCost = mod*80 + 1000;
        return totalCost;
    }else{
        mod = absDay % 10;
        totalCost = mod*50 + 1800;
        return totalCost;
    }
}

function megaFriend(friends){
    var longName;
    var flag = 0;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > flag) {
            var flag = friends[i].length;
            longName = friends[i];
        }
    }
    return longName;
}

var getKilo = kilometerToMeter(7);
    if(getKilo>0){
        console.log("7 kilometer = ", getKilo, "Meter");
    }else{
        console.log("Distance cannot be negative or zero!");
    }

var getBudget = budgetCalculator(4,3,1);
console.log("My total budget is = ", getBudget);

var getHotelCost = hotelCost(19);
console.log("My hotel cost is = ", getHotelCost);

var friends = ["Rakibul", "Iftikharrasha", "Ramakantakamar Shaheb", "Shafiq"];
var myMegaFriend = megaFriend(friends);
console.log("My mega friend is = ", myMegaFriend);
