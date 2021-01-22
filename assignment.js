// https://github.com/baterialsbot/assignment3
function kilometerToMeter(inputtedkilo){
    if(typeof(inputtedkilo)!=="number"){
        return "type error!!, try again";

    else if(inputtedkilo<1){
        return "Distance can not be negative";
    }
    
    else { 
        return inputtedkilo*1000;
    }
}

// budgetcalc
function budgetCalculator(watch,phone,laptop){
    if(typeof(watch)!=="number"){
        return "input is not valid";     
    }

    else if(typeof(phone)!=="number"){
        return "input is not valid";     
    }

    else if(typeof(laptop)!=="number"){
        return "input is not valid";     
    }

    else if(watch<1){
        return "Error! negative value";
    }

    else if(phone<1){
        return "Error! negative value";
    }

    else if(laptop<1){
        return "Error! negative value";
    }

    else{
        return watch*50+phone*100+laptop*500;
    }
    
}

// hotelcost
function hotelCost(days) {
    var totalCost = 0;
    if (days < 0) {
        return 'value is negative,try again'
    }
    if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var overTwentyDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + overTwentyDays;
    }
    return totalCost;
}

// megafriend
function megaFriend(friendsName){ 
    var highestLength=0;
    var highestName;
    for(var i=0;i<friendsName.length;i++){
        if(typeof(friendsName[i])!=="string"){
            return "Name must be string";
            break;
        }
        else if(friendsName[i].length>highestLength){
           highestLength=friendsName[i].length;
            highestName=friendsName[i];
        }
    }
    return highestName;
}