// William Norton Assignment: Conditionals June 20,2013

//Conditionals for Personal

var over18 = prompt("Are you 18 or older?"); //variable for over18 prompt
var kidsAge = prompt("What is the age of the child?"); //kidsAge variable prompt
var underAgeBed = "9 o'clock."; //underAgeBed variable prompt
var teenAgeBed = "10 o'clock."; //teenAgeBed variable prompt
var over18Note = "Better use good judgement on your bedtime."; //over18Note variable
var yearsLeft = 13 - kidsAge; //math for yearsLeft variable

if ((over18 === "yes") && (kidsAge > 18)){ //if statement for over 18 or not
	console.log(over18Note); //prints over18 note to console.log
}
else if (kidsAge >= 13){ //else if for kidsAge over 13
	console.log("Bed time is" + " " + teenAgeBed); //prints bedtime is: for over 13
}
else if (!(kidsAge >= 13)){ //else if for kids who are not over 13 years old
	console.log("Bed time is" + " " + underAgeBed + "You have" + " " + yearsLeft + " " + "years until you can stay up till" + " " + teenAgeBed); //prints to console.log how long the kid has till they can stay up later.
}
