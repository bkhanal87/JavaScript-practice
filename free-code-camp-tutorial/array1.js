// Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.

// Push ["dog", 3] onto the end of the pushArray variable.

const pushArray = [["John", 23], ["cat", 2]];

pushArray.push(["dog", 3]);

console.log(pushArray);

// Manipulate Arrays With pop()
// Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

//Use the .pop() function to remove the last item from popArray and assign the popped off value to a new variable, removedFromMyArray.

const popArray = [["John", 23], ["cat", 2]];

popArray.pop([1]);

console.log(popArray);

// Manipulate Arrays With shift()
// pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.


// Use the .shift() function to remove the first item from shiftArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const shiftArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = shiftArray.shift([0]);

console.log(removedFromMyArray);


// Manipulate Arrays With unshift()
// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
//.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Add ["Paul", 35] to the beginning of the unShiftArray variable using unshift().

const unShiftArray = [["John", 23], ["dog", 3]];
unShiftArray.unshift(["Pual", 35]);

console.log(unShiftArray);

