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
    func();
}

function lowerOrderFunction(){
    console.log("lower funtion");
}

higherOrderFunction(lowerOrderFunction);