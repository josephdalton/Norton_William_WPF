// William Norton June 14, 2013 Assignment: Expressions

// Personal Calculator for industry

var remainPaint = new Array(3); // Starts new array
	remainPaint[0] = prompt("How many gallons of paint left in can 1?"); //prompt user for array value
	remainPaint[1] = prompt("How many gallons of paint left in can 2?"); //prompt user for array value
	remainPaint[2] = prompt("How many gallons of paint left in can 3?"); //prompt user for array value
	
var bigJob = prompt("How many gallons of paint is needed for this job?"); //prompt user for amount of paint needed

var totalLeft = parseInt(remainPaint[0]) + parseInt(remainPaint[1]) + parseInt(remainPaint[2]); //parsing of the array for addition of values

console.log("We need" + " " + bigJob + " " + "gallons of paint for this job. We have" + " " + totalLeft + " " + "gallons left over."); //print amounts to console.log
