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
