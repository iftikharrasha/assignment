function kilometerToMeter(length){
    return length*1000;
}

function budgetCalculator(watch, mobile, laptop){
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;
    return priceOfWatch*watch + priceOfMobile*mobile + priceOfLaptop*laptop;
}

var getKilo = kilometerToMeter(7);
console.log("7 kilometer = ", getKilo, "Meter");

var getBudget = budgetCalculator(4,3,1);
console.log("My total budget is = ", getBudget);
