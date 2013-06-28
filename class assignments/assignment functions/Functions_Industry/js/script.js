/* 
William Norton
June 27, 2013
Assignment: Functions
*/

//Functions_Industry


var names = new Array(); //variable array names
	names[0] = "Bill"; //index 0 bill string
	names[1] = "Brian"; //index 1 brian string
	names[2] = "Larry"; //index 2 larry string
	
var battPerc = prompt("What is the percent of the battery?"); //variable battperc prompt
var fullBatt = 100; //variable fullbatt
var fullDays = prompt("What is the amount of battery do you need to use today?"); //variable fulldays prompt

function power(){ //function power
	console.log("You have enough power for today!"); //console.log for the function
}

var battToGo = function(){ //function batttogo
	var remain = fullDays - battPerc; // remain variable
	console.log(names[0] + " or " + names[1] + " or " + names[2] + " needs to plug in the fork truck. Its missing about " + remain + " percent.");
    return remain;
}

if ((battPerc >= fullBatt) || (battPerc > fullDays)){
	power();
}
else if  (battPerc < fullDays){
	battToGo();
}