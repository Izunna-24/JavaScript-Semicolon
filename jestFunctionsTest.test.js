let {addNumbers, evenNumbers } = require("./jestFunctions.js")//require is used to assign a file to a variable

test("Add two numbers",() =>{  // test takes in description, call back function, the test body: arrange = given, act = when,assert
let a = 3;// arrange
let b = 5;// arrange
let answer = addNumbers(a,b);//act,when

expect(answer).toBe(8);//assert
})

test("filter even numbbers", () =>{
let arr = [1,2,3,4,5,6];
let answer = evenNumbers(arr);
expect(answer).toEqual([2,4,6])

})