/*
Reverse a string.

Count vowels in a string.

Check if a string is a palindrome.

Capitalize the first letter of a string.
*/

//Reverse a string.

let str1 = "Hello";
let reverseStr = '';
for(let i=str1.length-1; i>=0; i--)
{
    reverseStr += str1[i];
}
console.log(reverseStr);

//Count vowels in a string.
let string1 = "shreya";
let vowels = 0;
for(let i=0; i<string1.length; i++)
{
    if(string1[i] === 'a' || string1[i] === 'e' || string1[i] === 'i' || string1[i] === 'o' || string1[i] === 'u'){
        vowels++;
    }
}
console.log(vowels);

//Check if a string is a palindrome.
let str2 = "abccba";
let i=0;
let j=str2.length-1;
let isPallindrome = true;

while(i <= j)
{
    if(str2[i] === str2[j])
    {
        i++;
        j--;
    }
    else{
        isPallindrome = false;
        break;
    }
}
if(isPallindrome){
    console.log(`${str2} is a pallindrome`);
}
else{
  console.log(`${str2} is not a pallindrome`);
}

//Capitalize the first letter of a string.
let str3 = "shreya";
console.log(`Capitalizing the first letter of ${str3}`);
str3 = str3[0].toUpperCase() + str3.slice(1);
console.log(str3);

