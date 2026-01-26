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
console.log("Before Sorting array is: ", points);
let sortedArray = points.sort(function(a,b){return a-b});
console.log("After orting array is: ", sortedArray);
