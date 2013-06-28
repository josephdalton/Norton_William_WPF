/* 
William Norton
June 27, 2013
Assignment: Functions
*/

//Functions_Personal

var name = prompt("What is your name?"); // variable name prompt
var drinkToday = prompt("How much Red Bull have you had today in OZ?"); //variable drinktoday prompt
var safeAmount = 40; //safeamount variable 

var totalAmount = function caffeineBuzz(){ //variable totalamount function
	var totalMath = safeAmount - drinkToday; //variable totalmath 
	return totalMath; //return totalmath to totalamount
}

var redBulls = totalAmount(); //variable redbulls

!(drinkToday >= safeAmount) ? console.log(name + ", you need some more caffeine, You can still safely have " + redBulls + " more OZ's today") : console.log("Yeah! " + name + " has his wings today with " + drinkToday + " OZ's of Red Bull");

