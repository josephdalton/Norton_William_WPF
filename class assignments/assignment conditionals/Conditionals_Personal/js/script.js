// William Norton Assignment: Conditionals June 20,2013

//Conditionals for Personal

var over18 = prompt("Are you 18 or older?");
var kidsAge = prompt("What is the age of the child?");
var underAgeBed = "9 o'clock.";
var teenAgeBed = "10 o'clock.";
var over18Note = "Better use good judgement on your bedtime.";
var yearsLeft = 13 - kidsAge;

if ((over18 === "yes") && (kidsAge > 18)){
	console.log(over18Note);
