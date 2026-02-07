function sayHello(){
    return "Hello World";
}
let greeting = sayHello();
console.log(greeting);

//A function can be used many times
function add(a, b){
    return a+b;
}

let sum = add(5, 10);
let res = add(50, 50);
console.log("Sum is: ", sum);
console.log("Res is: ", res);

//Convert Fahrenheit to Celsius
function toCelsius(fahrenheit)
{
    return 5/9 * (fahrenheit - 32);
}

let temperature = toCelsius(77);
console.log(`The corresponding temperature of given fahrenheit temperature: ${temperature}`);


//JavaScript Function Parameters
//Parameters allow you to send values to a function.
function add(a, b){
    return a+b;
}

let result = add(4, 5);
console.log("Addition of a and b is: ", result);

//A function can have one parameter
function sayHello(name){
    return "Hello " + name;
}

let greetings = sayHello("Shriya");
console.log(greetings);


//Functions with Multiple Parameters
function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}

//Parameters and Arguements
//Parameters are the names listed in the function defination.
//Arguements are the real values passed to, and received by the function. 
let name = getFullName("Shriya", "Uppal");
console.log(name);

/*
Parameter Rules
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the arguments.
JavaScript functions do not check the number of arguments received.
*/

//JavaScript function return
//When a function reaches the return statement, the function stops executing.
//The value after the return keyword is sent back to the caller.

function sayHello1(){
    return "Hello World";
}

let message = sayHello1();
console.log(message);

//Code written after a return statement will not be executed.
function multiply(a, b)
{
    return "Done";
    //Next line will never run.
    return a * b;
}

let result1 = multiply(4, 3);
console.log(result1);

//If a function does not return a value, the return value will be undefined.
function multiply1(a, b) {
  let x = a * b;
}

let result2 = multiply1(4, 3);
console.log("Function result without the return value: ", result2);

//You can use return to stop a function early, based on the condition.
function checkAge(age){
    if(age < 18){
        return "Too Young";
    }
    return "Access Granted";
}

let checkAdult = checkAge(10);
console.log(checkAdult);
