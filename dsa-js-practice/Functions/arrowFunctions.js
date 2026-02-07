//Arrow functions allows shorter syntax for function expressions.
//You can skip the function keyword, the return statement and the curly brackets.

const add = (a, b) => a+b;

console.log(add(4, 4));

//An arrow function is always written as a function expression.
const add1 = (a,b)=>{
    return a + b;
}

//This arrow function does the same thing as a regular function expression.

//Arrow functions and the this keyword.
//Arrow functions do not have their own this value. This inherit this from the surrounding code.
const person = {
    name: "John",
    greet: function(){
        return this.name;
    }
}

console.log(person.greet());