// An array is a special variable, which can hold more than one value:
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// Using an array literal is the easiest way to create a JavaScript Array.
// You access an array element by referring to the index number
// With JavaScript, the full array can be accessed by referring to the array name:

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars; // returns Saab,Volvo,BMW


// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// The real strength of JavaScript arrays are the built-in array properties and methods

// The length property of an array returns the length of an array (the number of array elements).


const fruits = ["Banana", "Orange", "Strawberry", "Kiwi"];
let length = fruits.length;
console.log(length);

// Accesing the first element
let fruit = fruits[0]; //returns Banana

// Last element
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit); //returns Kiwi

// Looping Array Elements
//using for loop
const fruits1 = ["Banana", "Orange", "Strawberry", "Kiwi"];
let length1 = fruits1.length;

let text = "<ul>";
for(let i=0; i < fruits1.length; i++) {
    text += "<li>" + fruits1[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

