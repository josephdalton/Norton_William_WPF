/* 
William Norton
June 26, 2013 
Functions worksheet 
*/

//Circumference

var circum = circumMath(); //variable circum defined as a function
function circumMath(){     //function circummath started
	var rad = prompt("What is the radius?"); //variable radius prompts for radius 
	var radToDia = rad * 2; //variable radius to diameter with math
	var diaToCir = radToDia * 3.14; //diameter to circumference math
	return diaToCir;
}
console.log("The circumference of the circle is " + circum); 



//Stung!

var deadAnimal = function(){
	var stingMath = beeStings * weight;
	return stingMath;
}

var weight = prompt("How much does the animal weigh in pounds?");
var beeStings = 8.666666667;
var howManyStings = deadAnimal(beeStings, weight);
console.log("It takes " + howManyStings + " stings to kill a " + weight + " pound animal.");




