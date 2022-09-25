// Write Reusable JavaScript with Functions
// In JavaScript, we can divide up our code into reusable parts called functions.

// Create a function called reusableFunction which prints the string Hi World to the dev console.
// Call the function.

function reusableFunction() {
    console.log("Hi World")
}
reusableFunction();

// Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. 
//The actual values that are input (or "passed") into a function when it is called are known as arguments.

// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.

function functionWithArgs(num1, num2){
    console.log(num1 + num2)
}
functionWithArgs(1, 2);

// Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num){
    return num * 5;
}
timesFive(5);
const answer = timesFive(5)
console.log(answer);

// Global Scope and Functions
//In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
//This means, they can be seen everywhere in your JavaScript code.
// Variables which are declared without the let or const keywords are automatically created in the global scope. 
//This can create unintended consequences elsewhere in your code or when running a function again. 
//You should always declare your variables with let or const.

// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}

// Local Scope and Functions
//Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

// Declare a local variable myVar inside myLocalScope and run the tests.
function myLocalScope() {
    const myVar = "foo";
    console.log(myVar); //returns foo
}
myLocalScope();
console.log(myVar); // returns myVar is not defined



// Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. 
// When you do this, the local variable takes precedence over the global variable.

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "Sweater";
    return outerWear;
}

myOutfit();
