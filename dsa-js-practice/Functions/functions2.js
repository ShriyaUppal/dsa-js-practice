//JavaScript function arguements.
//Parameters are the name listed in the function defination.
//Arguements are the real values passed to, and recieved by the function.

function multiply(a, b)
{
    return a * b;
}

let res = multiply(4, 5);
console.log(res);
//a and b are the parameters.
//4 and 5 are the arguements.

//The Arguements Object
//JavaScript functions have built-in object called the arguements object.
//The arguement object contains an array of arguements used when the function was called (invoked).
//This way you can simply use a function to find (for instance) the highest value in a list of numbers:

function findMax(){
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++)
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}
let x = findMax(1, 123, 500, 115, 44, 88);
console.log(x);

//Create a function to sum all input values
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll()
{
    let sum = 0;
    for(let i=0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(x);

//If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
//Arguements can be a variables
let a = 5;
let b = 10;
function add(n1, n2)
{
    return n1+n2;
}

let sum = add(a, b);
console.log(sum);

//Default Parameter Values
/*
ECMAScript 2015 allows function parameters to have default values.
You can now set a default value for a parameter.
The default value is used if no argument is provided. 
*/

//Example if y is not passed or undefined, then y=10
function subtract(x, y=10)
{
    return x - y;
}

let subResult = subtract(20);
console.log(subResult);

//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum1(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}

let n = sum1(4, 9, 16, 25, 29, 100, 66, 77);
console.log(n);





