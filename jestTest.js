let addNumbers = require("./add.js")//require is used to assign a file to a variable

test("Add two numbers",() =>{  // test takes in description, call back function, the test body: arrange = given, act = when,assert
let a = 3;// arrange
let b = 5;// arrange
let answer = addNumbers(a,b);//act,when

expect(answer).toBe(8);//assert
})