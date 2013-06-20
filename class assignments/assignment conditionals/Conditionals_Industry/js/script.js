// William Norton Assignment: Conditionals June 20,2013

//Conditionals for Industry

var part = new Array(); //New array for part
	part[0] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 0
	part[1] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 1
	part[2] = prompt("Does this part get welded before getting painted?"); //prompt for new array index 2
	
var welded = ("Take part to the welders"); 
var painted = ("Take part to the painters");

if (part[0] === "yes" || "Yes"){
	console.log(welded);
}else{
	console.log(painted);
}
if (part[1] === "yes" || "Yes"){
	console.log(welded);
}else{
	console.log(painted);
}
if (part[2] === "yes" || "Yes"){
	console.log(welded);
}else{
	console.log(painted);
}