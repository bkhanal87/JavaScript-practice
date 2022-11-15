// Object Literal Syntax

const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function(){
        // do stuff
    }
}

// Two ways to get info out of an object: dot notation and bracket notation

// dot notation
myObject.property // 'value!'

// bracket notation
myObject["obnoxious property"] // [Function]

// Dot notation is cleaner and is usually preffered

// Object as a design pattern: One of the simplest ways you can begin to organize your code is by simply grouping things into objects

// Object constructors: to duplicate when a specific type of object is needed

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

// call the function with the keyword new

const player1 = new Player('Steve', 'X')
const player2 = new Player('also Steve', 'O')
player1.sayName() // logs 'Steve'
player2.sayName() // logs 'also Steve'


