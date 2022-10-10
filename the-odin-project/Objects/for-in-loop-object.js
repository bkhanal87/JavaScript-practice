// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct.

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for(let key in user) {
    alert(key); //name, age, isAdmin

    alert(user[key]); // John, 30, true
}


// Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. 

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britian",
    // ...,
    "1": "USA"
};

for(let code in codes) {
    alert(code); // 1, 41, 44, 49
}


// Write the code, one line for each action:

// Create an empty object user_one.
    // Add the property name with the value Phillip.
// Add the property surname with the value Anderson.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user_one = {
    name: "Phillip",
    surname: "Anderson"
}

user_one.name = "Pete";
delete user_one.name;
console.log(user_one); //only displays surname: "Anderson"

// We have an object storing salaries of our team:

let salaries  = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

alert(sum); // 390


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for(let key in menu) {
        if(typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

