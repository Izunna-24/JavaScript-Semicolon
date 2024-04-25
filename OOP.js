//OOP in Js

// let animal = {
//     type:"unknown",
//     sound : function(){
//         console.log("The " +this.type + " makes a sound")
//     }
// }

// let dog = Object.create(animal);
// dog.type = "Dog";
// dog.color = "Brown"
// dog.sound()
// console.log(dog)

// //setPrototypeOf(takes two args) and the second arg is used to create prototype of the first one.
// let goat = {
//     //color:"black" creating the attributes before the setPrototypeOf function comes first
// }
// Object.setPrototypeOf(goat, animal)
// goat.type = "Goat"
// goat.colour = "Black"
// console.log(goat)

// //Chect waht unedrscore does: it copies ojbject into another object
// let vehicle = {wheels : 4};// object assigned to a variable
// let car  = {
//     seats : 5,
//     proto : vehicle,// __proto__ property assigned to vehicle
//     wheels : 6,
// }; //object assigned to variable

// //Print all objects and __proto__ property for each varibale
// //console.log(`vehicle:`, vehicle, vehicle.__proto__);
// console.log(`car:`, car, car.proto);
// //console.log(`car wheels:`, car, car.wheels);


//Constructor Function

function Person(name, age){ // names of constructor function begins with capital letter
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name+ " is ", this.age+ " years old")
    }
}

// const PersonOne = new Person("Jumy", 13);
// //console.log(PersonOne.name);
// //console.log(PersonOne.age);
// PersonOne.sayName()

// const AnotherPerson = new Person("Phantom", 77);
// console.log("Another object of Person:", AnotherPerson.name)



//Classes
class Zukky{
    constructor(name, age,size){
        this.name = name;
        this.age = age;
        this.size = size;
    }

    setName(newName){
        this.name = newName
    }

    getName(){
        return this.name;
    }

    setAge(herAge){
        this.age = herAge;
    }

    getAge(){
        return this.age;
    }

    setSize(herSize){
        this.size = herSize;
    }

    getSize(){
        return this.size;
    }
}