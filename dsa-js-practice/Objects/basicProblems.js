//Creation of objects

const person = {
    firstName: "John",
    lastName: "Doe", 
    age: 50,
    eyeColor: "Blue",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

//We can also create an empty object and add the properties later.
const car = {};

//Adding Properties.
car.name = "Fiat";
car.model = 500;
car.color = "white";

//Using the new keyword.
const smartPhone = new Object({
    name: "iPhone 16",
    version: 26.2,
    color: "Teal"
});

//Accessing the object properties.
let firstName = person['firstName'];
console.log(firstName);
let lastName = person.lastName;
console.log(lastName);

//Displaying the object
let text = person;
console.log(text);


//Object Constructor function
//This is needed when we want to create many objects of the same type.
function Person(first, last, age, color){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.eyeColor = color
};

const father = new Person("John", "Doe", 50, "blue");
const mother = new Person("Rally", "Sally", 45, "black");

let x = 'firstName';
let y = "age";

console.log(person[x] + " is " + person[y] + " years old. ");

//Adding new properties 
person.nationality = "English";
const result = person;
console.log(result);

//Deleting Properties
delete person.lastName;
console.log(person);

//Nested Objects
let owner = {
    name: "shreya",
    age: 24,
    car: {
        name: "BMW",
        type: "Petrol",
        model: 2026
    }
};

console.log(owner.car.name);
console.log(owner.car['type']);
console.log(owner["car"]["name"]);

let p1 = "car";
let p2 = "model";
console.log(owner[p1][p2]);

//Object method can be accessed with objectName.methodName with ()
console.log(person.fullName());
//If we access objectName.methodName then only function defination will print.
console.log(person.fullName);

//Displaying JavaScript objects
let res = person;
console.log(res);
console.log(person.firstName + " , " + person.age + " , " + person.eyeColor);

//Using for in loop
let res1 = " ";
for(let x in person){
    res1 += person[x] + " " + " , ";
}
console.log(res1);

//Using Object.values
console.log("Logging Object using object.values method");
let resArray = Object.values(person);
let finalRes = resArray.toString();
console.log(finalRes);

//Using Object.entries method
let fruits = {
    Apples: 300,
    Oranges: 500,
    Bananas: 100
};

console.log("Logging object using object.entries");
let fruitsRes = " ";
for(let [fruit, value] of Object.entries(fruits)){
    fruitsRes += fruit + " : " + value + "  ";
}

console.log(fruitsRes);

//Using JSON.stringify method
console.log("Logging object using JSON.stringify method");
let jsonRes = JSON.stringify(person);
console.log(jsonRes);



