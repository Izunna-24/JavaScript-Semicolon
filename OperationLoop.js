let user = {
    firstName:"Dayo",
    lastName:"Miriam",
    age:"106",
    sex:"female"
}
//for/in loop can loop through objects(non iterables) and iterables, but for/of can loop only iterables.
for (const key in user){
    console.log(user[key])
}

let array = [1,3,4,5,6]

for (const index in array){
    console.log(array[index]);
}

for(const value of array){
    console.log(value);
}