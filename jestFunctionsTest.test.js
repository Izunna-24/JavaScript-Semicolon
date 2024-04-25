let {addNumbers, addToLastIndex,evenNumbers} = require("./jestFunctions.js")//require is used to assign a file to a variable

test("Add two numbers",() =>{  // test takes in description, call back function, the test body: arrange = given, act = when,assert
let a = 3;// arrange
let b = 5;// arrange
let answer = addNumbers(a,b);//act,when

expect(answer).toBe(8);//assert (toBe is used for all premitives in js)
})

test("filter even numbbers", () =>{
let arr = [1,2,3,4,5,6];
let answer = evenNumbers(arr);
expect(answer).toEqual([2,4,6])

})

// test("assign grade to scores", () =>{
// let scores = [95, 78,85,60,45,92];
// let result = assignGrade(scores);
// expect(result).toEqual(["A","C","B","D","F","A"])
// })

test("adding one to last element", () =>{
    let arr = [5,2,3,1,2];
    let answer = addToLastIndex(arr);
    expect(answer).toEqual([5,2,3,1,3])
    
    })