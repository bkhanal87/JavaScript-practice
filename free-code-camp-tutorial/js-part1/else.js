//When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

// Combine the if statements into a single if/else statement.



// function testElse(val) {
//     let result = "";

//     if (val > 5) {
//         result = "Bigger than 5";
//     }

//     if (val <= 5) {
//         result = "5 or smaller";
//     }

//     return result;
// }

// testElse(4);

function testElse(val) {
    let result = "";

    if(val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
}

testElse(4);

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

// Convert the logic to use else if statements.

// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     }
  
//     if (val < 5) {
//       return "Smaller than 5";
//     }
  
//     return "Between 5 and 10";
//   }
  
//   testElseIf(7);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if(val < 5) {
        return "Smaller than 5"
    }
    else {
        return "Between 5 and 10"
    }
}

testElseIf(7)

