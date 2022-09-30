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
// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits3;
fruits3.sort();
fruits3.reverse();
document.getElementById("demo2").innerHTML = fruits3;


// sorting an array
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;

points.sort(function (a, b) {return b - a});
document.getElementById("demo2").innerHTML = points;