// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, ......, argN) => expression;

// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

let sum = (a, b) => a + b;

alert(sum(1, 2)); // 3

// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n => n * 2;

alert(double(3)); // 6

// If there are no arguments, parentheses are empty, but they must be present

let sayHi = () => alert("Hello!");

sayHi();


// Arrow functions can be used in the same way as Function Expressions.

let age = prompt("What is your age?", 18);

let welcome = (age <18) ?
() => alert('Hello!') : 
() => alert("Greetings!");

welcome();


// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

let sum1 = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum1(1, 2));

// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

ask("Do you agree?",
() => alert("You agreed."),
() => alert("You canceled the execution") );


