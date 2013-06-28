/* 
William Norton
June 27, 2013
Assignment: Functions
*/

//Functions_Industry


var names = new Array();
	names[0] = "Bill";
	names[1] = "Brian";
	names[2] = "Larry";
	
var battPerc = prompt("What is the percent of the battery?");
var fullBatt = 100;
var fullDays = prompt("What is the amount of battery do you need to use today?");

function power(){
	console.log("You have enough power for today!");
}

var battToGo = function(){
	var remain = fullDays - battPerc;
	console.log(names[0] + " or " + names[1] + " or " + names[2] + " needs to plug in the fork truck. Its missing about " + remain + " percent.");
    return remain;
}

