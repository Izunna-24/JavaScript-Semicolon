//ARRAYS in JavaScrpit
//push and pop
//shift and unshift
//slice and splice
//concat
let number = [12, 3, 4, 5];
console.log(number);
number.pop();//removes element in the last index
console.log(number);

number.push(3);// adds element to the last index

console.log(number);

//SHIFT
number.shift();// removes element from first index
console.log(number);

number.unshift(12);// adds element to the first index
console.log(number);


console.log(number.slice(1));// removes the element in the first index
console.log(number.slice(-1));// starts from 1 ends at index 2
let count = [1,3,4,5,6,7,8];
console.log(count);
console.log(count.splice(2,5)); //starts from index 2 and count to 5 indexes
console.log(count.splice(2)); //starts from index 2 and display the rest of the element

let counter = [1,2,3,4,5,6,6,7];
console.log(counter);
counter.splice(2,1,2,3);
console.log( counter);
//concat joins two objects into one
