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












