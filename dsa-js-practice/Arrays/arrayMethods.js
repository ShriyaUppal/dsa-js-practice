//JavaScript Array Length Method
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
const length = fruits.length;
console.log(length);

//JavaScript toString() method.
const list = fruits.toString();
console.log(list);

//JavaScript Array.at()
const element = fruits.at(2);
console.log(element);

//JavaScript Array.join(): This method joins all the elements into a string using a separator
const result = fruits.join(" * ");
console.log(result);

//Array push() and pop() method
//Pop Method
console.log("Array before popping element");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

fruits.pop();
console.log("Array after popping element");
for(let j=0; j<fruits.length; j++)
{
    console.log(fruits[j]);
}

let fruit = fruits.pop();
console.log(`Popped element is: ${fruit}`);

//Push Method
console.log("Array before pushing an element");
let newElement = fruits.push("Kiwi");
console.log("Array after pushing an element");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//returns new length of the array.
console.log(`Pushed element is: ${newElement}`);


//shift() removes an element at the begining and shifts all other elements at the lower index.
console.log("Array before shifting");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}
let shiftedFruit = fruits.shift();
console.log("Array after shifting");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}
//shift method returns the value that was shifted out.
console.log(`Shifted element was: ${shiftedFruit}`);

//unshift() adds an element at the begining and unshifts all the older element.
console.log("Array before unshift");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}
let unshiftElement = fruits.unshift("Lemon");
console.log("Array after unshift");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}
//unshift method returns the new array length.
console.log(`After unshift the updated array length is: ${unshiftElement}`);

//Changing Elements
fruits[2] = "Orange";
console.log("Array after changing element at index 2");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//JavaScript Array Length
//This method provides an easy way to append a new element to an array.
fruits[fruits.length] = "Mango";
console.log("After appending an element at the end of the array using length property: ");
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//Array isArray() method
let answer = Array.isArray(fruits);
console.log("The given variable is array: " + answer);

//delete() method 
//This method leaves undefined holes in the array. Use pop() or shift().

//Merging Arrays (Concatenating)
//JavaScript array concat()
//This method creates new array by merging (concatenating) two arrays.
let vegetables = ['Brinjal', 'Potatoes', 'Peas', 'Tomatoes'];
let concatArray = fruits.concat(vegetables);
console.log("After concatenation the resultant array is: ");
for(let i=0; i<concatArray.length; i++)
{
    console.log(concatArray[i]);
}
//concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguements.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myRes = arr1.concat(arr2, arr3);
console.log("Resultant Array after Concatenating three arrays");
for(let i=0; i<myRes.length; i++)
{
    console.log(myRes[i]);
} 

//concat() can also take strings as arguements.
let res = myRes.concat("Peter");
console.log("Array after concatenation");
for(let i=0; i<res.length; i++)
{
    console.log(res[i]);
} 


//Array copyWithin()
//This method copies array elements to another position in an array.
//Copy to index 2, all elements from index 0.
res.copyWithin(2, 0);
console.log("Array after doing copyWithin()");
for(let i=0; i<res.length; i++)
{
    console.log(res[i]);
}

//Copy to index 2, the elements from index 0 to 2.
res.copyWithin(2, 0, 2);
console.log("Array after doing copyWithin() to index 2, from index 0 to 2");
for(let i=0; i<res.length; i++)
{
    console.log(res[i]);
}
/*
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.
The copyWithin() method does not change the length of the array.
*/

//Fattening an Array
//Flattening is the process reducing the dimensionality of an array.
//The flat() method creates a new array with sub-array elements concatenated to the specified depth.
const myArr = [[1,2], [3,4], [5,6]];
console.log("Array before flat()");
for(let i=0; i<myArr.length; i++)
{
    for(let j=0; j<myArr.length-1; j++)
    {
        console.log(myArr[i][j]);
    }
}
const resultant = myArr.flat();
console.log("Array after flat()");
for(let i=0; i<myArr.length; i++)
{
    for(let j=0; j<myArr.length-1; j++)
    {
        console.log(myArr[i][j]);
    }
}

//JavaScript Array flatMap() method
//This method first maps all the elements of an array and then creates a new array by flattening the array.
const myArray = [1, 2, 3, 4, 5, 6];
let resArray = myArray.flatMap(x => [x, x*10]);
console.log("Array after using flatMap() method");
for(let i=0; i<resArray.length; i++)
{
    console.log(resArray[i]);
}

//Splicing and Slicing Arrays
//splice() adds a new element to an array.
//slice() slice out a piece of an array.

const newFruits = ['Banana', 'Orange', 'Apple', 'Mango'];
newFruits.splice(2, 0,"Lemon", "Kiwi");
console.log("Array After Splice()");
for(let i=0; i<newFruits.length; i++)
{
    console.log(newFruits[i]);
}  
//The first parameter defines the position where the new element should be added.
//The second parameter defines how many element should be removed.
//The rest of the parameters ("Lemon", "Kiwi") define the new elements to be added.


//The splice() method returns an array with the deleted items.
let removed = newFruits.splice(0, 2);
console.log(removed);

//Array toSpliced()
//The difference between toSpliced() and the old splice() is that it creates a new array, keeping the original array unchanged, while the old method altered the original array.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

//JavaScript Array slice()
//slice() method slices out a piece of an array into a new array.
const birthMonth = months.slice(6);
console.log("Birth Month is: ");
console.log(birthMonth); 

//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.


//Slice out a part of array starting from array element 3
const sliced = months.slice(3);
console.log(sliced);

/**
The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument.
 */

const slicedArray = months.slice(1, 3);
console.log(slicedArray);


//Automatic toString()
const stringArray = months.toString();
console.log(`After converting the array to string is: ${stringArray}`);









