// let numbers = [2,6,8];
// for (const index in numbers){
//     if(numbers[index] % 2 == 0){}





function getHCF(num1, num2) {
    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

function calculateHCF(numbers) {
    let hcf = numbers[0]; 

    for (let index = 1; index < numbers.length; index++) {
        hcf = getHCF(hcf, numbers[index]);
    }

    return hcf;
}



let numbers = [8, 16, 8];
//let numbers = [,9, 12];
var hcf = calculateHCF(numbers);

console.log("HCF = " + hcf);





