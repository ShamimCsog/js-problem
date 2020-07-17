//feetToMile Star
function feetToMile(feet) {
 
    //Run When Value will Positive 
    if (feet > 0) {
        var mile = feet / 5280; // 1 mile = 5280 feet
        return mile.toFixed(3); // return mile value
    }
    //Run When Value will Negative 
    else {
        return 'Value  cannot be negative';
    }
}


//woodCalculator Star

function woodCalculator(chair, table, bed) {
    //When value greater than zero
    if (chair && table && bed > 0) {
        forChair = chair * 1;   //1 CFT for Chair 
        forTable = table * 3;  // 3 CFT for table
        forBed = bed * 5;     // 5 CFT for Bed
        totalWood = (forChair + forTable + forBed); //total wood need

        return totalWood;
    }
    //When value is negative or zero
    else {
        return 'sorry - value cannot be zero or negative';
    }
}

//brickCalculator Star

function brickCalculator(floor) {
 
    var brickPerFeet = 1000; // 1000 piece brick  for per feet
    var firstTenFloor = (10 * 15 * brickPerFeet); // 1 - 10th floor, per floor height is 15 feet
    var secondTenFloor = (10 * 12 * brickPerFeet); // 11th to 20th floor per floor height is 12 feet 
 
    // checking floor value is greater than zero or not 
    while (floor > 0) {
        if (floor >= 1 && floor <= 10) {
            var floorHeight = floor * 15; 
            var totalBrick = floorHeight * brickPerFeet; // total brick need
            return totalBrick; 
        }
 
        else if (floor > 10 && floor <= 20) {
            var remainderFloor = floor % 10; // remain floor
            var totalBrick = firstTenFloor + (remainderFloor * 12 * brickPerFeet);
            return totalBrick;
        }
 
        else {
            var remainderFloor = (floor - 20); // remain floor 
            var totalBrick = firstTenFloor + secondTenFloor + (remainderFloor * 10 * brickPerFeet); 
            return totalBrick;
        }
    }
 
    return 'sorry - Floor value cannot be zero or negative'; // return this when value is negative or zero 
}
 
// tinyFriend Start 

function tinyFriend(friendsName) {
    //checking string empty or not ?
    if (friendsName.length == 0 || friendsName == '' || friendsName == "") {
        return 'string cannot be empty';
    }
    else {
        var min = friendsName[0].length; // set index 0 is smallest
        var tinyFriendName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            // compare index 0's length with all others index length 
            if (min > friendsName[i].length) {
                min = friendsName[i].length;
                tinyFriendName = friendsName[i]; // store smallest name in tinyFriendName 
            }
        }
        return tinyFriendName; // return smallest string to function caller 
    }
}
