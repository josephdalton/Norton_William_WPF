// William Norton June 14, 2013 Assignment: Expressions

// Wacky calculator finding average gas mileage for month

var weeklyMileage = new Array(4); //setting up variable array
	weeklyMileage[0] = prompt("Gas mileage for week 1?"); //prompting for array
	weeklyMileage[1] = prompt("Gas mileage for week 2?"); //prompting for array
	weeklyMileage[2] = prompt("Gas mileage for week 3?"); //prompting for array
	weeklyMileage[3] = prompt("Gas mileage for week 4?");
	
var monthMileage = parseInt(weeklyMileage[0]) + parseInt(weeklyMileage[1]) + parseInt(weeklyMileage[2]) + parseInt(weeklyMileage[3]);

var average = parseFloat(monthMileage / 4);

console.log("This month you averaged" + " " + average + " " + "miles per gallon");
