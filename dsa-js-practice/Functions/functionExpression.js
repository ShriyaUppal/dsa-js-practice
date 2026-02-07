//A function expression is a function stored in a variable.
const multiply = function(a, b)
{
    return a * b;
}

//After a function expression has been a stored in a variable, the variable can be used as a function.
let x = multiply(4, 5);
console.log(x);

//Anonymous Function
/*
Function expressions are commonly used to create anonymous functions.
The function above is actually function without a name.
Functions stored in variables do not need names.
The variable name is used to call the function. 
*/

/*But, function expressions can also be a named:
const add = function add(a, b) {return a + b;};
*/

//Function expressions use semicolons
const add = function(a, b){
    return a+b;
};
let result = add(4, 10);
console.log(result);

//A function expressions can be assigned to a variable, passed as an arguement to another function or returned from a function.
function run(fn)
{
    return fn;
}

const sayHello = function(){
    return "Hello";
}

let res = run(sayHello);
console.log(res);