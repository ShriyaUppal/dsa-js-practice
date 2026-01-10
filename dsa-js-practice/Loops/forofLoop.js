//Print all elements of an array.

let numbers = [1, 2, 3, 4, 5];
console.log("Printing all the elements of an array");
for(let num of numbers)
{
    console.log(num);
}

//Count total vowels in an array of strings
let fruits = ['apple', 'kiwi', 'banana'];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let fruit of fruits){
    for(let ch of fruit)
    {
        if(vowels.includes(ch))
        {
            count++;
        }
    }
}
console.log("Total vowels in an array are: " + count);

//Find longest word in an array.
let arr = ['apple', 'kiwi', 'banana', 'cherry'];
let longest = " ";
for(let ch of arr)
{
    if(ch.length > longest.length)
    {
        longest = ch;
    }
}
console.log('Longest word is: ', longest);
