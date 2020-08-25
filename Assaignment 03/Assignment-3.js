// Converting a function Feet To Mile

function feetToMile(feet){
    if(isNaN(feet)){
        console.log("Only number is accepted.Please enter a positive number");
    }
    else{
        if(feet>=0){
            var mile=feet/5280;
            return mile;
        }
        else{
            console.log("Please enter a positive number");
        }
    }
    
}

var result=feetToMile(10);
console.log('Mile is:',result);


// Using a function as Wood Calculator

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    if(isNaN(chairQuantity) || chairQuantity<0){
        console.log('Only number is accepted as  positive number');
    }
    else if(isNaN(tableQuantity) || tableQuantity<0){
            console.log('Only number is accepted as  positive number');       
    }
    else if(isNaN(bedQuantity) || bedQuantity<0){
            console.log('Only number is accepted as  positive number');
    }
    else{
        var totalWood=(chairQuantity*1)+(tableQuantity*2)+(bedQuantity*3);
        return totalWood;
    }
    
}

  

var result2 = woodCalculator(10,5,5);
console.log('Total wood:',result2);


//Find how many bricks need in a floor using function

function brickCalculator(floor){
    if(isNaN(floor) || floor<0 ){
        console.log('Only accept number as a positive');
    }
    else if(floor<=10){
        var totalBrick1= floor * 15 * 1000;
        return totalBrick1;
    }
    else if(floor<21 && floor>=11){
        var totalBrick2= floor * 12 * 1000;
        return totalBrick2;
    }
    else{
        var totalBrick3= floor * 10 * 1000;
        return totalBrick3;
    }
}

var result3= brickCalculator(20);
console.log('Total Bricks:',result3);

// Find tiny friend using function

function tinyFriend(friendList){
    if(Array.isArray(friendList)){
        if(friendList.length>0){
            var length= friendList.length;
            var shortIndex=0;
            for(i=0;i<length;i++){
                if(friendList[shortIndex].length > friendList[i].length){
                    shortIndex=i;
                }
            }
            return friendList[shortIndex];

        }
        else{
            console.log('Your array is empty');
        }
    }
    else{
        console.log('Your given friend is not array');
    }
}

 var friend=['shuvo','rakib','omi','sakib'];
 var result4= tinyFriend(friend);
 console.log('My Tiny Friend is:',result4);





