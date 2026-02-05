const arr = [2, 4, 6, 8];

//Check if all numbers are even.
let allEven = true;
for(let num of arr)
{
    if(num%2 !== 0)
    {
        allEven = false;
        break;
    }
}
console.log("All Even: ", allEven);

/*Short Method
let result = arr.every(num => num%2 === 0);
console.log(result);
*/

//Check if array is sorted
let isSorted = true;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] > arr[i+1])
    {
        isSorted = false;
        break;
    }
}
console.log("Array is sorted: ", isSorted);

//Compare with the sorted copy
let sortedArray = [...arr].sort((a, b)=> a-b);
let res = arr.every((num, i) => num === sortedArray[i]);
console.log(res);
