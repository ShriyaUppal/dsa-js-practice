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
