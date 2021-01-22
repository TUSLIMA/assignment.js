function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;

    } else if ( days <= 20) {
        var firstPart = 10 * 100;
        var remaining= days - 10;
        var secondPart = remaining * 80;
        cost = firstPart +secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining =  days -20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
 
var total = hotelCost(70);
console.log(total);


function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
    }
    var road = kilometerToMeter (5);
    console.log(road);

    function megaFriend(circle) {
        var mega = circle[0];
        for (var i = 1; i < circle.length; i++) {
            if (circle[i].length> mega.length) {
                mega = circle[i];
            }
        }
        return mega;
    }
    var circle = ["Mohona", "Alfi", "Adiba", "Jahara","Bangladesh"];
    console.log(megaFriend(circle));    

    function  budgetCalculator(watch, mobile, laptop) {
        var price = watch*50 + mobile*100 + laptop*500;
        return price;
        }
        var calculate = budgetCalculator (2, 3, 1);
        console.log(calculate);