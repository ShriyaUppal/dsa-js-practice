/*
Number

Add, subtract, multiply, divide two numbers.

Check if a number is even or odd.

Find the largest of 3 numbers.

Convert Celsius to Fahrenheit. 
*/

//Answer 1:
let num1 = 30;
let num2 = 20;
let sum = num1 + num2;
console.log(`Sum of num1 and num2 is: ${sum}`);

let difference = num1 - num2;
console.log(`Difference between num1 and num2 is: ${difference}`);

let product = num1 * num2;
console.log(`Product of num1 and num2 is: ${product}`);

let division = num1 / num2;
console.log(`Divison of num1 and num2 is: ${division}`);


//Check whether the number is even or odd.
let number = 15;
if(number%2 === 0)
{
    console.log(`${number} is an even number.`);
}
else{
    console.log(`${number} is an odd number`);
}

//Find the largest of 3 numbers.
let number1 = 10;
let number2 = 90;
let number3 = 69;

if(number1 > number2 && number1 > number3)
{
    console.log(`${number1} is the greatest among all the given numbers.`);
}

else if(number2 > number1 && number2 > number3)
{
    console.log(`${number2} is the greatest among all the given numbers.`);
}
else{
    console.log(`${number3} is the greatest among all the given numbers. `);
}

//Convert Celsius to Fahrenheit.
let celsiusTemp = 22;
let fahrenheitTemp = celsiusTemp * 1.8 + 32;
console.log(`${celsiusTemp} Celsius is equal to ${fahrenheitTemp} Fahrenheit`);

