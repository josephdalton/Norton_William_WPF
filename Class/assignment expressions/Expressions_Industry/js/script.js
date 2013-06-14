// William Norton June 14, 2013 Assignment: Expressions

// Personal Calculator for industry

var remainPaint = new Array(3); // Starts new array
	remainPaint[0] = prompt("How many gallons of paint left in can 1?"); //prompt user for array value
	remainPaint[1] = prompt("How many gallons of paint left in can 2?");
	remainPaint[2] = prompt("How many gallons of paint left in can 3?");
	
var bigJob = prompt("How many gallons of paint is needed for this job?");

var totalLeft = parseInt(remainPaint[0]) + parseInt(remainPaint[1]) + parseInt(remainPaint[2]);

console.log("We need" + " " + bigJob + " " + "gallons of paint for this job. We have" + " " + totalLeft + " " + "gallons left over.");
