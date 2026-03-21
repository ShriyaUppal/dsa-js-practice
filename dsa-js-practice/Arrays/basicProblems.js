const cars = ["Saab", "Volvo", "BMW"];
//Accessing the array elements.
let car = cars[0];
console.log(car);

//We can also create an empty array and provide elements later.
const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Mango";
fruits[2] = "Cherry";
//Changing an Array Element
fruits[1] = "Kiwi";
const fruit = fruits[1];
console.log(fruit); 

//Convert an array to string
const stringArray = fruits.toString();
console.log("Converting Array into String");
console.log(stringArray);



//Using the JavaScript new Keyword
const marks = new Array(10, 20, 30, 40, 50);
//Array are the special type of objects. The JavaScript typeof operator returns object for arrays.
console.log(marks.)
