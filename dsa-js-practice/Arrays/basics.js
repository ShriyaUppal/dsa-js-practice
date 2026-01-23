//Creation of array
const cars = ['Volvo', 'Saab', 'BMW'];

//We can also create an empty array and provide elements later.
const fruits = [];
fruits[0] = 'Apple',
fruits[1] = "Cherry";
fruits[2] = "Orange";

//Using the JavaScript new Keyword
const cars1 = ['Thar', 'Fortuner', 'Scorpio'];

//Accessing Array Elements
const car = cars[0];
console.log(car);

//Changing an array element 
cars[0] = "Opel";
console.log("After changing the first element of an array");
for(let i=0; i<cars.length; i++)
{
    console.log(cars[i] + " ");
}

//Converting an array to string
console.log("Array after converting to string");
const res = cars.toString();
console.log(res);

//Length Property
const length = cars.length;
console.log(`Length of the array is: ${length}`);

//Accessing the first element of an array
let element1 = cars[0];
console.log(element1);

//Accessing the last element of an array
let lastElement = cars[cars.length-1];
console.log(lastElement);

//Looping Array Elements
console.log("Looping through array elements");
for(let i=0; i<cars.length; i++)
{
    console.log(cars[i]);
}

//Using forEach
console.log("Looping using forEach loop");
let text = '';
fruits.forEach(myFunc);

function myFunc(val){
    text += val + " ";
}

console.log(text);

//Adding Array Elements
console.log("Array after adding the element");
fruits.push("Lemon");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//How to to know whether the defined variable is array.
let type = typeof(fruits);
console.log(`Type of fruits variable is ${type}`);

//As typeof return object so we use ECMAScript5 method isArray()
const result = Array.isArray(fruits);
console.log(result);

//Second method is instanceof
const result1 = fruits instanceof Array;
console.log(result1);

//Nested Arrays and Objects
const myObj = {
    name: 'John',
    age: 40,
    cars: [
        {name: "Ford", models:["Fiesta", 'Mustang']},
        {name: "BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

//To access arrays inside arrays use a for-in-loop for each array
let x = "";

for (let car of myObj.cars) {
    x += car.name + ": ";
    for (let model of car.models) {
        x += model + " ";
    }
    x += "\n";
}

console.log(x);
