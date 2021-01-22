function kilometerToMeter(length){
    return length*1000;
}

function budgetCalculator(watch, mobile, laptop){
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;
    totalBudget = priceOfWatch*watch + priceOfMobile*mobile + priceOfLaptop*laptop;
    return totalBudget;
}

function hotelCost(cost){
    var totalCost,mod;
    if(cost<=10){
        totalCost = cost*100;
        return totalCost;
    }else if(cost>10 && cost<20){
        mod = cost % 10;
        totalCost = mod*80 + 1000;
        return totalCost;
    }else{
        mod = cost % 10;
        totalCost = mod*50 + 1800;
        return totalCost;
    }
}

var getKilo = kilometerToMeter(7);
console.log("7 kilometer = ", getKilo, "Meter");

var getBudget = budgetCalculator(4,3,1);
console.log("My total budget is = ", getBudget);

var getHotelCost = hotelCost(19);
console.log("My hotel cost is = ", getHotelCost);
