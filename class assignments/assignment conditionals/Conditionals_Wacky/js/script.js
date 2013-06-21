//William Norton Assignment: Conditionals June 20,2013

//Conditionals for Wacky


var tickets = prompt("Do you want tickets to the game?"); //variable prompt for tickets
var tkPrice = 25; //variable for ticket price

if (tickets == "no"){
	console.log("OK, have a nice day.");
}else{ 
	console.log("Your sure you dont want any?");
}

var amount = prompt("How many people do you want to take?");
var total = parseInt(amount) * tkPrice;
(tickets === "yes") ? console.log("That will be " + total + " dollars.") : console.log("You sure you dont want more?");



