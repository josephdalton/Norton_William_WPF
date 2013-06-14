// William Norton June 14, 2013 Assignment: Expressions

// Personal Calculator for status of dog food

var poundsOfFood = prompt("How many pounds of food for the dogs do we have?"); //prompt user for amount of food on hand
var dogKatie = prompt("How many pounds of food does Katie eat in a week?"); // prompt for amount of dog food Katie eats
var dogDash = prompt("How many pounds of food does Dash eat in a week?"); //prompt for amount of dog food Dash eats

var enoughFood = parseInt(dogKatie) + parseInt(dogDash); // adds up variables by pulling out the integer for addition

console.log("The dogs require" + " " + enoughFood + " " + "pounds of food this week." + " " + "We have" + " " + poundsOfFood + " " + "pounds on hand."); //prints to the console.log the status of dog food





