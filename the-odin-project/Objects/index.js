// objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language.
// An object can be created with figure brackets {…} with an optional list of properties. 
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user1 = {}; // "object literal" syntax

// We can immediately put some properties into {...} as “key: value” pairs:

let another_user = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};

// Property values are accessible using the dot notation:

alert(another_user.name); //John
alert(another_user.age); // 30

// The value can be of any type. Let’s add a boolean one:

another_user.isAdmin = true;


// To remove a property, we can use the delete operator:

delete another_user.name; // deletes "John" from the object another_user

// We can also use multiword property names, but then they must be quoted:

let admin_user = {
    name: "John",
    age: 30,
    "likes birds": true // multiword property must be quoted
};

// There’s an alternative “square bracket notation” that works with any string:

let alternate_user = {};

// set 
alternate_user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete 
delete user["likes birds"]; 

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is take from the variable fruit
};

alert(bag.apple); // 5 if fruit = "apple"

// We can use more complex expressions inside square brackets:

let another_fruit = 'orange';
let another_bag = {
    [another_fruit + 'Juice']: 5 // another_bag.orangeJuice = 5
}; 

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction

let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert(obj.for + obj.let + obj.return); // 6