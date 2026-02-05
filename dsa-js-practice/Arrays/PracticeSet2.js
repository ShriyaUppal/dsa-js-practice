let arr = [3, 7, 1, 9, 3, 7];

//Find first non repeating number
let frequency = [];
for(let num of arr)
{
    frequency[num] = (frequency[num] || 0) + 1;
}

let firstNonRepeat = -1;
for(let i of arr)
{
    if(frequency[i] === 1)
    {
        firstNonRepeat = i;
        break;
    }
}

console.log("First non Repeating:", firstNonRepeat);


//Find index of 9
/*let elementIndex = arr.indexOf(9);
console.log(elementIndex);
*/

let index = -1;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === 9)
    {
        index = i;
    }
}
console.log("Index of 9 is: ", index);


//Count the occurrences of 7
let element = 7;
let count = 0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === element)
    {
        count++;
    }
}
console.log(`Occurrence of ${element} is: ${count}`);

//
