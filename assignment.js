//https://github.com/mahatab127/assignment-js

// 1. Problem solve:
// Kilometer To Meter
// 1 Kilometer = 1000 Meter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(4);
console.log(result,"Meter");

// 2. Problem solve:
// Total Budget Calculator
// 1 clock = 50, 1 Phone = 100, 1 Laptop = 500
function budgetCalculator(clock,phone,laptop){
    var clockPrice = clock*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var totalPrice = clockPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(1, 3, 2);
console.log(result);

// 3. Problem solve:
// Total total hotel cost Calculator
// 1 - 10day = 100, 11 - 20day = 80, 21 - 30day =50

function hotelCost(totalDay){

    totalCost = 0;
    if(totalDay <=10){
        totalCost = totalDay * 100;
    }else if(totalDay <=20){
        var tenDay = 10 * 100;
        var remaining = totalDay - 10;
        var twentyDay = remaining * 80;
        totalCost = tenDay + twentyDay;
    }
    else{
        var tenDay = 10 * 100;
        var twentyDay = 10 * 80;
        var remaining = totalDay - 20;
        var thirtyDay = remaining * 50;
        totalCost = tenDay + twentyDay + thirtyDay;
    }
    return totalCost
 }
 var totalAmount = hotelCost(22);
console.log(totalAmount);

// 4. Problem solve:
// I am not include a Function. 
var plorp = ["Sagor", "Lima","Mahtab Ali","Monjur Rahman"];
var longest = plorp.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');
console.log(longest);