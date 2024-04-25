//Scope
//Global Scope
//Local scope
    //function scope
    //block scope
//Module Scope


const num = 2;// initialized globally

function exampleFunction(){
    let lastName = "Ijeduo";
    if(true){
        let firstName = "Izunna"
        console.log(firstName);
    }
    console.log(firstName);
}
//console.log(lastName);

exampleFunction();
