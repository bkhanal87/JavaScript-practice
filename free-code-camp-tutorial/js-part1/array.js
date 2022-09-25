// Store Multiple Values in one Variable using JavaScript Arrays
//Modify the new array myArray so that it contains both a string and a number (in that order).
const myArray = ["string", 1]
console.log(myArray);

// Nest one Array within Another Array
const newArray = [['apples', 5], ['Oranges', 3]];
console.log(newArray);

// Access Array Data with Indexes
const numArray = [50, 60, 70];
console.log(numArray[0]);
const data = numArray[1];
console.log(data);


// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

const mutableArray = [18, 64, 99];

mutableArray[0] = 15;

console.log(mutableArray); //yeilds [15, 64, 99];

// Access Multi-Dimensional Arrays With Indexes

const multiArray = [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = multiArray[2][1];
console.log(myData);
