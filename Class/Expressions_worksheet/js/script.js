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




//Problem 3 Slices of Pie Part 2

var slicesPerPizza = prompt("How many pieces per pie?", 10); //variable for number of slices per pizza
var numberOfPies = prompt("How many pizza pies ordered?", 2);  //variable for number of pizzas ordered
var numberOfPeople = prompt("How many people are eating?", 4); // variable for number of people eating

var piecesPerPerson = slicesPerPizza * numberOfPies % numberOfPeople; //calculations for problem with modulo for remaining number of pieces


console.log("Sparky got" + " " + piecesPerPerson + " " + "pieces of pizza"); //print results to console.log




//Problem 4 Average Shopping Bill

var shoppingBill = [150, 220, 175, 210, 198]; //my array of 5 shopping totals

var totalAmount = shoppingBill[0] + shoppingBill[1] + shoppingBill[2] + shoppingBill[3] + shoppingBill[4]; //addition of the arrays elements

console.log("You have spent a total of" + " " + "$" + totalAmount + " " + "over 5 weeks." + " " + "That is an average of" + " " + "$" + totalAmount/5 + " " + "per week"); // prints calculations to console.log






//Problem 5 Discounts

var originalPrice = prompt("Original Price?");

var discountPercent = prompt("Discount Percent?");

var itemDescrip = prompt("Item Name?");

var salesTax = prompt("Sales Tax Amount?");

var itemTaxed = originalPrice * salesTax;


console.log("Your" + " " + itemDescrip + " " + "was originally $" + originalPrice + "," + " " + "but after a" + " " + discountPercent + "%" + " " + "discount, it is now" + " " + "$" +   );


