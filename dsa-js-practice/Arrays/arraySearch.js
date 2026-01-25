//JavaScript Array indexOf() Method.
//indexOf() methods searches an array for element value and returns its position.
const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
const element = fruits.indexOf('Apple')+1;
console.log(`Element found at index ${element}`);

//JavaScript Array lastIndex() Method.
//lastIndex() method is same as indexOf() method, the difference is that it returns the last occurence of the specified element value.
const index = fruits.lastIndexOf('Apple') + 1;
console.log(`Element present at position ${index}`);

//JavaScript Array includes() Method.
//ECMAScript (2016) introduces this method to arrays. This method allows us to check if an element is present in an array.
const res = fruits.includes('Mango');
console.log(res);

//JavaScript Array find() Method.
//This method returns the value of the first element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
const result = numbers.find(myFunction);

function myFunction(value, index, array){
    return value > 18;
}
console.log(`The first element which is greater than 18 is: ${result}`);

//JavaScript Array findIndex() Method.
//findIndex() method returns the index of the first array element that passes a test function.
let first = numbers.findIndex(myFunction1)

function myFunction1(val, index, array){
    return val > 18;
}

console.log(`Index of the first Array Element is found at index ${first}`);

//JavaScript Array findLast() Method.
//ES2023 added this method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x>40);
console.log(high);

//JavaScript Array findLastIndex() Method.
//The findLastIndex() method finds the index of the last element that satisfies a condition.
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);




