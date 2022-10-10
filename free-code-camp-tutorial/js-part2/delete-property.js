//We can also delete properties from objects

// Delete the tails property from myDog. You may use either dot or bracket notation.

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Bruno", "Emily", "Chase"],
    "bark": "woof"
};

delete myDog.tails;

console.log(myDog); //deletes tails property and its value

