//forEach method
//This method calls a callback function for each element of an array.
const points = [34, 90, 56, 65, 89];
let text = "";
points.forEach(myFunction);

function myFunction(value){
    text += value +  10 + " ";
}

console.log(text);


//Array map()
// This method creates a new array by performing a function on each array element.
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.map(myFunction1);

function myFunction1(value, index, arr){
    return value * 2;
}

console.log("Result after using map method", result);


//Array flatMap()
//This method first maps all the elements of an array and then creates a new array by flatterning 
// the array.
const myArray = [1, 2, 3, 4, 5, 6];
const newArr = myArray.flatMap((x) => x*2);
console.log(newArr);


//Array Filter
//The filter method creates a new array with array elements that pass a test.
let arr = [32, 70, 34, 23, 11, 45];
let evenValues = arr.filter(myFunction2);

function myFunction2(val, index, arr)
{
    return val%2;
}

console.log("Filter Data is: ", evenValues);

//JavaScript Array Reduce
//The reduce() method runs a function on each array element produce a single value.

const numberArray = [45, 4, 9, 16, 25];
let sum = numberArray.reduce(myFunction);

function myFunction(total, value, index, array){
    return total + value;
}
console.log("Result of Reduce Method is:", sum);

//Reduce method takes four arguements
//The total (the initial value/previously returned value).
//The item value
//The item index
//The array itself

//JavaScript Array reduceRight()
//This method runs a function on each array element to produce a single value.
//The reduceRight method works from right to left.
const number = [45, 4, 9, 16, 25];
let finalSum = number.reduceRight(myfunction);
function myfunction(total, value){
    return total + value;
}

console.log("Result using reduceRight() method: ", finalSum);


//JavaScript Array every()
//This method checks if all array values pass a test.
const ages = [45, 4, 9, 16, 25];
let above18 = ages.every(myFunction)

function myFunction(value, index, array){
    return value > 18;
}

console.log("Result of every() method: ", above18);

//JavaScript Array some()
//This method checks if some array values pass a test.
const numbers1 = [45, 4, 9, 16, 25];
let someOver18 = numbers1.some(myFunction);

function myFunction(value){
    return value > 18;
}

console.log("Result of some() method: ", someOver18);

//JavaScript Array.from()
//The Array.from() method returns an Array Object from 
//Any iterable object
//Any object with a length property

//Create an array from string
let text1 = "ABCDEFG";
const myArr = Array.from(text1);
console.log("Array Created from string using from() method: ", myArr);

//Array.from() has an optional parameter which allows you to execute a function on each element of the new array:
const array = [1, 2, 3, 4, 5];
const myArray1 = Array.from(array, (x) => x * 2);
console.log(myArray1);

//JavaScript Array keys()
//The array.keys() method returns the array iterator object with the keys of an array.
const fruits = ["Apple", "Mango", "Orange", "Grapes"];
const keys = fruits.keys();
let text2 = "";
for(let x of keys){
    text2 += x + " ";
}
console.log(text2);

//JavaScript Array entries()
//Creates an Array Iterator, and then iterate over the key/value pairs.
const fruits1 = ["Apple", "Mango", "Orange", "Banana"];
const f = fruits.entries();
for(let x of f)
{
    console.log(x);
} 

//JavaScript Array with() Method:
//This is the safe method to update elements in an array without altering the original array.
const months = ["January", "Feburary", "Marc", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

//JavaScrpit Array spread(...) operator
//The ... operator expands an array into individual elements.
//This method can be used join arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


//The spread operator can be used to copy an array.
const copyArr = [...arr1];
console.log(copyArr);

//The spread operator can be used to pass arguements to a function.
const numbers2 = [23,55,21,87,56];
let minValue = Math.min(...numbers2);
let maxValue = Math.max(...numbers2);
console.log(maxValue, minValue);

//JavaScript Array rest()
//The rest operator(...) allows us to destruct an array and collect the leftovers.
let a, rest;
let b, rest1;
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
[a, ...rest] = arr4;
console.log(rest);

[a, b, ...rest1] = arr4;
console.log(rest1);

