/* 
William Norton
June 27, 2013
Assignment: Functions
*/

//Functions_Personal

var name = prompt("What is your name?");
var drinkToday = prompt("How much Red Bull have you had today in OZ?");
var safeAmount = 40;

var totalAmount = function caffeineBuzz(){
	var totalMath = safeAmount - drinkToday;
	return totalMath;
}

var redBulls = totalAmount();

!(drinkToday >= safeAmount) ? console.log(name + ", you need some more caffeine, You can still safely have " + redBulls + " more OZ's today") : console.log("Yeah! " + name + " has his wings today with " + drinkToday + " OZ's of Red Bull");

