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
	return diaToCir; //returns the variable diaToCir to the variable circum
}
console.log("The circumference of the circle is " + circum); //prints the output of variable circum



//Stung!

var deadAnimal = function(){  //anonymous function deadanimal
	var stingMath = beeStings * weight; //variable for the math
	return stingMath; //returns the math data to the deadanimal variable
}

var weight = prompt("How much does the animal weigh in pounds?"); //prompts for the weight
var beeStings = 8.666666667; //beestings variable equals 8.666666667
var howManyStings = deadAnimal(beeStings, weight); //variable howmanystings is equal to the deadanimal function work
console.log("It takes " + howManyStings + " stings to kill a " + weight + " pound animal."); //print global variables


circumMath();
console.log(circum);




