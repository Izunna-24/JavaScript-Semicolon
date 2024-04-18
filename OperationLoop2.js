let obj1 = {
    name:"panti",
    population:60,
    temperature:9,
    currency:"naira"
};

let obj2 = {
    name:"Pelumi",
    population:51,
    temperature:8,
    currency:"naira"
};

let obj3 = {
    name:"khone",
    population:60,
    temperature:10,
    currency:"naira"
};

let obj4 = {
    name:"peru",
    population:66,
    temperature:17,
    currency:"naira"
};

let obj5 = {
    name:"kick",
    population:40,
    temperature:80,
    currency:"naira"
};

let obj6 = {
    name:"corner",
    population:20,
    temperature:10,
    currency:"naira"
};
let obj7 = {
    name:"pakororo",
    population:45,
    temperature:14,
    currency:"naira"
};

let obj8 = {
    name:"yaro",
    population:15,
    temperature:25,
    currency:"naira"
};

let obj9 = {
    name:"jara",
    population:19,
    temperature:16,
    currency:"naira"
};

let new_array = [[null,obj1,obj2,obj3],[obj4,obj5,obj6,null],[obj7,null,obj8,obj9]];

//console.log(new_array);
let total = 0;
for (const index in new_array){
        for(const key in index){
            if(new_array[index][key] != null && new_array[index][key].temperature >= 10){
                 total += new_array[index][key].population

            }
        }
    }
                console.log("sum of population is",total)