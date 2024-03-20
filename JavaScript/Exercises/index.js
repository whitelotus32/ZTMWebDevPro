// add variable "firstName" and "lastName" // so that they equal your name

var firstName = "Nick";
var lastName = "Dixon";

// create a variable that holds the answer // of "firstName" + " " + "lastName"

var fullName = firstName + " " + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?

// Answer = 23

// What is c equal to?
var c;

// c = undefined



// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

var firstNumber = propmt("Please provide the first number");
var secondNumber = propmt("Please provide the second number");
alert(Number(firstNumber) + Number(secondNumber));

// BONUS: Make a program that can subtract, multiply, and also divide!

alert(Number(firstNumber) - Number(secondNumber));
alert(Number(firstNumber) * Number(secondNumber));
alert(Number(firstNumber) / Number(secondNumber));


// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
    alert("Powering on. Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}


// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}


// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 2. Sort the array in order.
array.shift();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];