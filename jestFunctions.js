function addNumbers(x,y){
    let answer = x + y;
    return answer
}

function evenNumbers(numbers){
    let result =  numbers.filter(number => number % 2 == 0);
    return result;
}


// function assignGrade(grades){
//     let newGrades= []
 
//    grades.map(element=> {
//      if(element >= 90 && element <= 100){
//          return newGrades.push("A")
//      } else if (element >= 80 && element <= 89){
//          return newGrades.push("B")
//      } else if (element >= 70 && element <= 79){
//          return newGrades.push("C")
//      }else if (element >= 60 && element <= 69){
//          return newGrades.push("D")
//      } else return newGrades.push("F")
 
//  }
 
//  )
//  return newGrades
// }

function addToLastIndex(numbers) {

    for(let index = numbers.length - 1; index >= 0; index--){
    if(numbers[index] != 9){
        numbers[index] ++;
        break;
    }else { numbers[index] = 0;
    }
       
        
}
    return numbers
 }


module.exports = {addNumbers,evenNumbers,addToLastIndex}





