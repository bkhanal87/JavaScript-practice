// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. 
// Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
// In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion.


//Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

function testEqual(val) {
    if (val == 12) {

        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

