// Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. 
// In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

//Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

console.log(addThree());

// Assignment with a Returned Value
// Everything to the right of the equal sign is resolved before the value is assigned. 
// This means we can take the return value of a function and assign it to a variable.


//Call the processArg function with an argument of 7 and assign its return value to the variable processed.

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processArg(7);

processed = processArg(7);




