//William Norton Assignment: Conditionals June 20,2013

//Conditionals for Wacky


var tickets = prompt("Do you want tickets to the game?"); //variable prompt for tickets
var tkPrice = 25; //variable for ticket price

if (tickets == "no"){ //if statement for tickets, yes or no
	console.log("OK, have a nice day."); //console log print
}else{  
	console.log("Your sure you dont want any?"); //else statement print to console log 
}

var amount = prompt("How many people do you want to take?"); //variable amount prompt
var total = parseInt(amount) * tkPrice; // variable for total amount
(tickets === "yes") ? console.log("That will be " + total + " dollars.") : console.log("You sure you dont want more?"); //if else statement in terenery



