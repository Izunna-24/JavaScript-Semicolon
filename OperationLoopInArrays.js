// let user = {
//     firstName:"Dayo",
//     lastName:"Miriam",
//     age:"106",
//     sex:"female"
// }
// //for/in loop can loop through objects(non iterables) and iterables, but for/of can loop only iterables.
// for (const key in user){
//     console.log(user[key])
// }

// let array = [1,3,4,5,6]

// for (const index in array){
//     console.log(array[index]);
// }

// for(const value of array){
//     console.log(value);
// }

let array = [1,3,4,5,6];
//you can filter and map at the same time
let answer = array.filter(num => num % 2 == 0).map(num => num *10)

let arr = []

//array.forEach((num)=>{console.log(num * 2);})// using forEach with lamdas and Streams
//let answer = array.forEach((num)=>{arr.push (num* 2);})

//console.log(arr)

//Map means going through the array element each to alter their states
//let answer = array.map((num)=> num % 2 == 1)
//let answer = array.map((num)=> num  * 2)
//
console.log(answer)