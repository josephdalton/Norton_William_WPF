//William Norton June 18, 2013 Conditionals Worksheet

//Stuff your face I

var entryWeight = prompt("How much do you weigh?"); //variable for competitors weight, prompted

if (entryWeight >= 250){ // if statement determining if entryWeight is greater than or equal to 250
	console.log("The competitor qualifies for the heavyweight division."); //prints to console.log if above statement is true
}
else {  //if above statement is false then this prints
	console.log("The competitor needs to gain some weight!");
}

//Celsius to Fahrenheit converter

var degrees = prompt("Enter the degrees.");
var degCF = prompt("Enter f for Fahrenheit or c for Celsius.");
var cenToFah = 5/9 * (degrees + 32);
var fahToCen = 5/9 * (degrees - 32);

if ((degCF == "f") || (degCF == "F")){
	console.log("The temperature is" + " " + fahToCen + " " + "Celsius.");

}
else if ((degCF == "c") || (degCF == "C")){
	console.log("The temperature is" + " " + cenToFah + " " + "Fahrenheit.");
}

	
		
//Grade Letter Calculator

var grade = prompt("What is your grade percent?")

if (grade >=0 && grade <=69){
	console.log("F");
}
if (grade >= 70 && grade <= 72){
	console.log("D");
}
if (grade >= 73 && grade <= 75){
	console.log("C");
}
if (grade >= 76 && grade <= 79){
	console.log("C+");
}
if (grade >= 80 && grade <= 84){
	console.log("B");
}
if (grade >= 85 && grade <= 89){
	console.log("B+");
}
if (grade >= 90 && grade <= 94){
	console.log("A");
}
if (grade >=95 && grade <=100){
	console.log("A+");
}


//Tire Pressure I

var pressure = new Array ();
	pressure[0] = prompt("Front drivers side tire pressure?");
	pressure[1] = prompt("Front passenger side tire pressure?");
	pressure[2] = prompt("Rear driver side tire pressure?");
	pressure[3] = prompt("Read passenger side tire pressure?");
	
if ((pressure[0] === pressure[1]) && (pressure[2] === pressure[3])){
	console.log("The tires pass spec!");
}else{
	console.log("Get your tires checked!");
}
