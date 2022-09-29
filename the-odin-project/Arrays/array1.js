// The splice() method adds new items to an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;
// let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
// document.getElementById("demo2").innerHTML = "New Array:<br> " + fruits;
// document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed;


// //The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (2) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


// The slice() method slices out a piece of an array.


const fruits1 = ["Pineapple", "Guava", "Lyichi", "Cardamom"];
const citrus = fruits1.slice(1);
document.getElementById("demo").innerHTML = fruits1 + "<br><br>" + citrus;

// The sort() method sorts an array alphabetically:

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits2;
fruits2.sort();
document.getElementById("demo2").innerHTML = fruits2;

// Reversing an Array
