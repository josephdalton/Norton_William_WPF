//William Norton 6-13-2013 Expression Worksheet

//Problem 1 Dog Years
var sparkysAge = 7;  //variable for sparkys age
var humanAge = prompt("Enter number of years Sparkys been alive in human years", 8);   //variable for human years

var sparkysRealAge = humanAge * sparkysAge; //calculation for sparkys real age

console.log("Sparkys been alive for " + sparkysRealAge + " " + "dog years"); // print results to console



//Problem 2 Slice of Pie Part 1

var slicesPerPizza = prompt("How many pieces per pie?", 10); //variable for number of slices per pizza
var numberOfPies = prompt("How many pizza pies ordered?", 2);  //variable for number of pizzas ordered
var numberOfPeople = prompt("How many people are eating?", 4); // variable for number of people eating

var piecesPerPerson = slicesPerPizza * numberOfPies / numberOfPeople; // calculations for the problem
parseFloat(piecesPerPerson); //letting variable piecesPerPerson use a decimal
console.log("Each person ate" + " " + piecesPerPerson + " " + "pieces of pizza!"); //prints results to console.log





