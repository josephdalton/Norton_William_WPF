/* 
William Norton
Assignment: Functions
June 26,2013
*/

//Functions_Wacky

var age = prompt("How old are you?");
var payRate = 5;
var jobs = prompt("How many jobs did you do?");

var amountOfAllowance = function(){
	var totalAllowance = payRate * jobs;
	return totalAllowance;
}


var totalAmount = amountOfAllowance();

if (age <= 12){	
	var newAmount = totalAmount - jobs * 2;
	var fullyVested = 12 - age;
	console.log("Good job on your work but your not fully vested so you get " + newAmount + " dollars." + " You have " + fullyVested + " years till you get the full amount");
