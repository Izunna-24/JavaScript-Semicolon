function addNumbers(x,y){
    let answer = x + y;
    return answer
}

function evenNumbers(numbers){
    let result =  numbers.filter(number => number % 2 == 0);
    return result;
}


function assignGrade(grades){
       let newGrades= []
    
      grades.map(element=> {
        if(element >= 90 && element <= 100){
            return newGrades.push("A")
        } else if (element >= 80 && element <= 89){
            return newGrades.push("B")
        } else if (element >= 70 && element <= 79){
            return newGrades.push("C")
        }else if (element >= 60 && element <= 69){
            return newGrades.push("D")
        } else return newGrades.push("F")
    
    }
    
    )
    return newGrades


}

//module.exports = addNumbers;
module.exports = {addNumbers,evenNumbers, assignGrade}

let scores = [90, 50, 45, 78, 23,88];

console.log(assignGrade(scores))
