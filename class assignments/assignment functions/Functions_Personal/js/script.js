/* 
William Norton
June 27, 2013
Assignment: Functions
*/

//Functions_Personal

var name = prompt("What is your name?"); // variable name prompt
var drinkToday = prompt("How much Red Bull have you had today in OZ?"); //variable drinktoday prompt
var safeAmount = 40; //safeamount variable 

var totalAmount = function caffeineBuzz(){
	var totalMath = safeAmount - drinkToday;
	return totalMath;
}

var redBulls = totalAmount();

!(drinkToday >= safeAmount) ? console.log(name + ", you need some more caffeine, You can still safely have " + redBulls + " more OZ's today") : console.log("Yeah! " + name + " has his wings today with " + drinkToday + " OZ's of Red Bull");

