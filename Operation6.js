// nested functions



// function calc(x){
//     function secondNumber(a){
//         return a * x;
    
//     }
//     return secondNumber;
// }
// let result = calc(3);
// console.log(result(2));
// console.log(calc(3)(2));

const calc = (x) => {
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
};

console.log(calc(3)(2));

function higherOrderFunction(func){
    console.log("higher function")
    //lowerFunction();
}

 higherOrderFunction(()=>{
    console.log("lower funtion");
});

//callback funtion: passing a funtion as an argument into another funtion

function greetings(greet){
    return function person(name){
        return `Hello, ${name} ${greet}`;

    }
}
console.log(greetings("Good morining!")("John"));