/* 
William Norton
Assignment: Functions
June 26,2013
*/

//Functions_Wacky

var age = prompt("How old are you?"); //prompts for age variable
var payRate = 5; //payrate is 5 dollars
var jobs = prompt("How many jobs did you do?"); //number of jobs prompts

var amountOfAllowance = function(){ //function variable amountofallowance
	var totalAllowance = payRate * jobs; //variable totalallowance math
	return totalAllowance; //returns the math to amountofallowance variable
}


var totalAmount = amountOfAllowance(); //var totalamount

if (age <= 12){	
	var newAmount = totalAmount - jobs * 2;
	var fullyVested = 12 - age;
	console.log("Good job on your work but your not fully vested so you get " + newAmount + " dollars." + " You have " + fullyVested + " years till you get the full amount");
}else{	
	console.log("Good job, you get " + totalAmount + " dollars.");
}
