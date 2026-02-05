const arr = [4, 2, 7, 2, 9, 4, 1];

//Sort Ascending.
const sortedArray = arr.sort(function(a, b){return a-b});
console.log(sortedArray);

//Find 2nd Largest number
//const desSort = arr.sort(function(a, b){return b-a});
let maxElement = sortedArray[sortedArray.length - 2];
console.log(`Second largest element is: ${maxElement}`);

function checkElement(key){
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === key)
    {
        console.log(`Key is found at index: ${i}`);
    }
}
console.log("Element is not present in the array");
}

checkElement(5);

//Number Transformation
let array = [5, 12, 8, 130, 44];
//Get numbers > 10
const filterData = array.filter(val =>{
    return val > 10;
})
console.log("Printing numbers greateter than 10", filterData);

//Square those numbers
const square = filterData.map((val)=>{
    return val*val;
})
console.log("Printing the square of given array", square);

//Find their total sum
const  sum = filterData.reduce((prev, curr) =>{
    return prev + curr;
})
console.log("Printing the sum of given array: ", sum);

//3. Words Operations
const words = ["apple", "banana", "kiwi", "mango"];
//Convert all array elements into upper case
let upperCase = words.map(word => word.toUpperCase());
console.log(upperCase);

//Find the longest word
let longestWord = words.reduce((current, longest) =>{
    return current.length > longest.length ? current : longest;
})
console.log(longestWord);

//Sort by Length
let sortedByLength = words.sort((a, b) => a.length - b.length);
console.log(sortedByLength);

//Count the frequency of each element 
let numbers = [1, 2, 2, 3, 1, 4, 2];
let freq = {};
for(let num of numbers)
{
    freq[num] = (freq[num] || 0) + 1;
}
console.log(freq);

//Find element with higher frequency
let maxCount = 0;
let max;
for(let key in freq)
{
    if(freq[key] > maxCount)
    {
        maxCount = freq[key];
        max = key;
    }
}
console.log(max);

//Compare two arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

//Find common elements
let common = arr1.filter(num => arr2.includes(num));
console.log(common);

//Merge both arrays
let merged = [...arr1, ...arr2];
console.log(merged);

let unique = [];
for(let num of merged)
{
    if(!unique.includes(num))
    {
        unique.push(num);
    }
}

console.log(unique);

//Reverse array without reverse method
let unsorted = [10, 20, 30, 40, 50];
let reversed = [...unsorted];
console.log(reversed);

for(let i=0; i<reversed.length/2; i++)
{
    let temp = reversed[i];
    reversed[i] = reversed[reversed.length - 1 - i];
    reversed[reversed.length - 1 - i] = temp;
}

//console.log(reversed);


//Rotate array by two positions
let k=2;
let n = unsorted.length;
let rotatedArray = unsorted.slice(n-k).concat(unsorted.slice(0, n-k));
console.log(rotatedArray);

//Problem 4:
let array2 = [0, 5, 0, 3, 0, 2];
let nonZeros = [];
let zeros = [];
for(let num of array2){
    if(num === 0)
    {
        zeros.push(num);
    }
    else{
        nonZeros.push(num);
    }
}

let result = nonZeros.concat(zeros);
console.log(result);


//Count non zero numbers
let count = 0;
for(let i=0; i<array2.length; i++)
{
    if(array2[i] === 0)
    {
        count++;
    }
}
console.log("Count of non zero elements is: ", count);

// let count = array2.filter(num => num !== 0).length;

//Object Array Mini Problem
let users = [
    {name: "A", age: 22},
    {name: "B", age: 17},
    {name: "C", age: 25}
];

//Get users with age > 18
let adults = users.filter(user => user.age > 18);
console.log(adults);

//Sort users by age.
let sortedUsers = [...users].sort((a, b)=> a.age - b.age);
console.log(sortedUsers);

//Extract only names
let userNames = users.map(user => (user.name));
console.log(userNames);















