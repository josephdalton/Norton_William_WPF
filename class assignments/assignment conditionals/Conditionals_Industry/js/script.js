// William Norton Assignment: Conditionals June 20,2013

//Conditionals for Industry

var part = new Array(); //New array for part
	part[0] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 0
	part[1] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 1
	part[2] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 2
	
var welded = ("Take part to the welders"); //variable welded 
var painted = ("Take part to the painters"); //variable painted

if (part[0] === "yes"){ //if statement for taking prompt from array[0]
	console.log(welded); //prints variable welded to console
}else{ //else statement for console.log variable "painted"
	console.log(painted); //print variable painted to console.log
}
if (part[1] === "yes"){ //if statement for array[1] prompt
	console.log(welded); //prints variable welded to console.log
}else{ //else statement for array[1]
	console.log(painted); //print variable painted to console.log
}
if (part[2] === "yes"){ //if statement for array[2]
	console.log(welded); //prints variable welded to console.log
}else{ //else statement for printing variable painted
	console.log(painted); //prints painted variable to console.log
}