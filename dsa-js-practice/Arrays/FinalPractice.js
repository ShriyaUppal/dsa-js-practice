let arr = [1, 2, 2, 3, 4, 4, 5];
//problem1:
//Remove duplicates
let frequency = {};

for(let num of arr)
{
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log(frequency);

let result = [];
for(let num in frequency)
{
   result.push(Number(num)); //keys are string
}
console.log(result);

//Number greater than 2
let greaterThanTwo = result.filter(num => num > 2);
console.log(greaterThanTwo);

//Sum of remaining number
let remaining = greaterThanTwo.reduce((acc, num) =>acc + num, 0);
console.log(remaining);

//Problem 2:
const arr2 = [5, 8, 5, 6, 8, 9, 5];

//Count occurences of each number
let res = {};
for(let num of arr2)
{
    res[num] = (res[num] || 0) + 1;
}
console.log(res);

//Find most frequent number
let frequent = null;
let maxCount = 0;
for(let num in res)
{
    if(res[num] > maxCount)
    {
        maxCount = res[num];
        frequent = num;
    }
}
console.log(`Most Frequent number is: ${frequent}`);


//Problem 3: Position + Transformation
const arr3 = [10, 20, 30, 40];
let reversedArray = [...arr3].reverse();
console.log(reversedArray);

//Double each value
let doubleValue = arr3.map(val => 2 * val);
console.log(doubleValue);

//Problem 4:
let students = [
    {name:"Riya", marks:80},
    {name:"Aman", marks:45},
    {name:"Neha", marks:60}
];

//Get students with marks ≥ 60
let marksGreaterThanSixty = students.filter(student => student.marks >= 60);
console.log(marksGreaterThanSixty);

//Extract their names
let studentName = marksGreaterThanSixty.map(student => student.name );
console.log(studentName);

//Problem 5: Logic Check
const arr4 = [3, 6, 9, 12];
//Check if all numbers are multiples of 3
const multiplesOfThree = arr4.every((num) => num%3 === 0);
console.log(multiplesOfThree);

//Check if array is sorted
const sortedArray = [...arr4].sort((a, b) => a-b);
let sorted = arr4.every((num, i)=> num === sortedArray[i]);
console.log(sorted);





