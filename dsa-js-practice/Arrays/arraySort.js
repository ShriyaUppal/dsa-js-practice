//Sorting an array
//The sort() method sorts an array alphabetically.
const fruits = ["Mango", "Kiwi", "Orange", "Apple"];
console.log("Before sorting array is: ", fruits);
let sortedFruits = fruits.sort();
console.log("After sorting array is: ", sortedFruits);

//Reversing an array
//The reverse() method reverses the elements in an array.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before reversing the array: ", fruits1);
let reversedArray = fruits1.reverse();
console.log("After reversing the array: ", reversedArray);

//By combining the sort() and reverese() method we can sort the array in descending order.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Before Sorting the array is: ${fruits2}`);
let sorted = fruits2.sort();
console.log(`After Sorting the array is: ${sorted}`);
let reversed = fruits2.reverse();
console.log(`After reverse the array is: ${reversed}`);

//JavaScript Array toSorted() Method:
//toSorted() method is the safest way to sort the array without altering the original array.
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log(`Before Sorting: ${months}`);
let sortedM = months.toSorted();
console.log(`After Sorting: ${sortedM}`);

//JavaScript Array toReversed() method:
//toReversed() method as a safe way to reverse an array without altering the original array.
console.log(`Before reversing: ${months}`);
let reversedM = months.toReversed();
console.log(`After reversing: ${reversedM}`);


//Numeric sort()
const points = [40, 100, 1, 5, 25, 10];
console.log("Sorting using sort function", points.sort());
console.log("Before Sorting array is: ", points);
let sortedArray = points.sort(function(a,b){return a-b});
console.log("After sorting array is: ", sortedArray);

//Use same trick for descending order.
console.log("Array after sorting in descending order");
let desArray = points.sort(function(a, b){return b-a});
console.log(desArray);


//For Random Shuffle
const arr = [1, 2, 3, 4, 5];
//let result = [];
for(let i=arr.length-1; i>0; i--)
{
    let j = Math.floor(Math.random() * (i+1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
    //result.push(arr[j]);

}

console.log("After sorting: ", arr);


//In order to find maximum and minimum element
//First method: Using sorting.
const unsortedArr = [80, 50, 100, 43, 65];
const sortedArr = unsortedArr.sort(function(a, b){return a-b});
console.log("Sorted Array: ", sortedArr);
let firstElement = sortedArr[0];
let lastElement = sortedArr[sortedArr.length-1];
console.log("Minimum Element of Array is: ", firstElement);
console.log("Maximum Element of Array is: ", lastElement); 

//Second Method: Using Math.max() and Math.min()
let minimum = Math.min(...unsortedArr);
let maximum = Math.max(...unsortedArr);
console.log(minimum);
console.log(maximum);

//Third method: Using Home Made method for finding the maximum and minimum in an array
//Maximum method;
const temp = [100, 89, 45, 67, 44, 32];

function findMax(arr){
    let max = -Infinity;
for(let i=0; i<temp.length; i++)
{
    if(temp[i] > max){
        max = temp[i];
    }
}
return max;
}
let maxElement = findMax(temp);
console.log("Finding Maximum Element using Home made function: ", maxElement);


//For finding Minimum Element 
function findMin(arr){
    let min = Infinity;
for(let i=0; i<temp.length; i++)
{
    if(temp[i] < min){
        min = temp[i];
    }
}
return min;
}
let minElement = findMin(temp);
console.log("Finding Minimum Element using Home made function: ", minElement);


//Since arrays contains object as object containd different properties of data types. 
// We can also use sort() function here. 
const cars = [
    {type: "Volvo", year: 2018},
    {type: "Saab", year: 2000},
    {type: "BMW", year: 2001}
];

const sortedYear = cars.sort(function(a,b){return a.year-b.year});
console.log(sortedYear);


