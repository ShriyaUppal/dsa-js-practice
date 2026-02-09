/*
Level 1 — Basic Function Control

Sum of two numbers
function sum(a, b) { }
Check if number is even
Return square of a number
Convert Celsius to Fahrenheit
Return the greater of two numbers
*/

//Ques 1:
function add(a, b){
    return a+b;
}
let addResult = add(16, 15);
console.log(`Sum of a and b is: ${addResult}`);

//Ques 2:
function checkEven(n){
    if(n%2 === 0)
    {
        return true;
    }
    return false;
}
let res = checkEven(32);
console.log(res);

//Ques 3:
function calculateSquare(n)
{
    return n*n;
}
let square = calculateSquare(8);
console.log(square);

//Ques 4:
function toFahrenheit(celsius)
{
    return celsius*9/5 + 32;
}
let temp = toFahrenheit(19);
console.log(temp);

//Ques 5:
function findGreater(n1, n2)
{
    if(n1 > n2)
    {
        return n1;
    }
    else{
        return n2;
    }
}

let greater = findGreater(89, 100);
console.log(greater); 


/*
Level 2 — Functions + Arrays

Sum of array elements
function sumArray(arr) { }
Find largest number in array
Count even numbers in array
Reverse array
Remove duplicates from array
*/

//Ques 1:
let nums = [3, 4, 5, 6, 7, 8];
function sumOfArray(arr)
{
    let sum = 0;
    for(let i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}
console.log("Sum of array elements is: ", sumOfArray(nums));

//Ques 2:
function findLargest(arr)
{
    let max = -Infinity;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    } 
    return max;
}

let maximum = findLargest(nums);
console.log(`The maximum element of array is: ${maximum}`);

//Ques 3:
function countEvenNumbers(arr)
{
    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2 === 0)
        {
            count++;
        }
    }
    return count;
}

let countEven = countEvenNumbers(nums);
console.log(`Count of even numbers is: ${countEven}`);

//Reverse array
function reverseArray(arr)
{
    let reversed = [];
    for(let i=arr.length-1; i>=0; i--)
    {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log("Before reversing array is: ", nums);
let reversedArray = reverseArray(nums)
console.log("After reversing the array is: ", reversedArray);

//Remove duplicates from array
let array = [1, 45, 67, 89, 88, 67, 90, 88];
function removeDuplicates(arr){
    let uniques = [];
    for(let i=0; i<array.length; i++)
    {
        if(!uniques.includes(arr[i]))
        {
            uniques.push(arr[i]);
        }
    }
    return uniques;
}

let uniqueArray = removeDuplicates(array);
console.log("Unique array is: ", uniqueArray);

/*
Level 3 — Functions + Strings

Reverse a string
Count vowels in a string
Check if string is palindrome
Find longest word in sentence
Convert first letter of each word to uppercase
*/

//Ques 1:
function reverseString(str)
{
    let reverseStr = "";
    for(let i=str.length-1; i>=0; i--)
    {
        reverseStr += str[i];
    }
    return reverseStr;
}

let reverseStr = reverseString("Shriya");
console.log(`Reverse string is: ${reverseStr}`);

//Ques 2:
function countVowels(str){
    let count=0;
    str = str.toLowerCase();
    for(let i=0; i<str.length; i++)
    {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' )
        {
            count++;
        }
    }
    return count;
}

let vowels = countVowels("Hello");
console.log("Number of vowels are: ", vowels);

//Ques 3:
function reverseArray(str1){
    let reversed = "";
    for(let i=str1.length-1; i>=0; i--)
    {
        reversed += str1[i];
    }
    return reversed;
}

function checkPallindrome(str2){
    let reverse = reverseArray(str2)
    console.log(reverse);
    if(str2 === reverse)
    {
        return true;
    }
    return false;
}

let pallindromeRes = checkPallindrome("madam");
console.log(pallindromeRes);

//Ques 4: Find longest word in sentence
function findLongestWord(str)
{
    let words = str.split(" ");
    let longest = words[0];
    for(let i=1; i<words.length; i++)
    {
        if(words[i].length > longest.length)
        {
            longest = words[i];
        }
    }
    return longest;
}

let result = findLongestWord("i love javascript");
console.log("Longest word is: ", result);

//Ques 5: Convert first letter of each word to uppercase

function firstUpperCase(str)
{
    let words = str.split(" ");
    for(let i=0; i<words.length; i++)
    {
     words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    return words.join(" ");
}

let result1 = firstUpperCase("i love javascript");
console.log(result1); 




/*
Level 4 — Function Logic Building

Move zeros to end
function moveZeros(arr) { }
Find second largest number
Check if array is sorted
Find frequency of elements
Return index of a number (without indexOf)
*/

//Ques 1: Move zeros to end
function moveZeroes(arr)
{
    let result = [];
    let zeroCount = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] !== 0)
        {
            result.push(arr[i]);
        }
        else{
            zeroCount++;
        }
    }

    for(let i=0; i<zeroCount; i++)
    {
        result.push(0);
    }
    return result;
}
let arr2 = [0, 1, 0, 3, 12];
let res1 = moveZeroes(arr2);
console.log(res1);

//Ques 2: Find second largest number
function secondLargest(arr)
{
    if(arr.length < 2)
    {
        return null;
    }

    let unique = [...new Set(arr)];
    if(unique.length < 2)
    {
        return null;
    }
    
    unique.sort((a, b )=> b-a);
    return unique[1];
    
}
const input = [10, 5, 20, 8]
let res2 = secondLargest(input);
console.log(res2);

//Ques 3: Check if array is sorted
let arr3 = [5,2,3,4];
function checkSortedArray(arr)
{
    let flag = true;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            flag = false;
        }
    }
    return flag;
}

let result4 = checkSortedArray(arr3);
console.log(result4);

//Ques 5: Find frequency of elements
function countFrequency(arr)
{
    let obj = {};
    for(let i=0; i<arr.length; i++)
    {
        let element = arr[i];
        if(obj[element])
        {
            obj[element]++;
        }
        else{
            obj[element] = 1;
        }
    }
    return obj;
}

console.log(countFrequency([1, 2, 2, 3, 1, 2]));

//Ques 6: Return index of a number (without indexOf)
function findIndex(arr, target)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
}

console.log(findIndex([10, 20, 30, 40], 30));

/*

Level 5 — Small Real-world Style

Calculate total price with tax
function calculateTotal(price, taxPercent) { }
Validate password length
Format full name
function formatName(first, last) { }
Check if email contains '@'
Return greeting with default name
function greet(name = "Guest") { }
*/

//Ques 1: Calculate Total Price with Tax
function calculatePrice(price, tax){
    const totalPrice = price + (price * tax/100);
    return Number(totalPrice.toFixed(2));
}

console.log("Total Price is: ", calculatePrice(100, 18));

//Ques 2: Validate password length
function checkPasswordStrength(str)
{
    if(str.length >= 8)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(checkPasswordStrength("abc@12345"));

//Ques 3: Format full name
function formatFullName(firstName, lastName){
   //remove extra spaces
   firstName = firstName.trim();
   lastName = lastName.trim();

   let formattedFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
   let formattedLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

   return formattedFirst + " " + formattedLast;
}

console.log(formatFullName("shriya", "uppal"));


//Ques 4: Check if email contains '@'
function checkEmail(email){
    email = email.trim();
    return email.includes("@");
}

console.log("Email contains @: ", checkEmail("shriya123"));
//Ques 5: Return greeting with default name function greet(name = "Guest") { }
function greet(name = "Guest"){
    return "Hello " + name;
}

console.log(greet());