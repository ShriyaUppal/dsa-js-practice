/*
Practice Problems

Declare variables using let, const, and var and print their values.

Try reassigning:

let → allowed

const → error (observe it)

Create a block {} and check scope difference between var and let.

Swap two numbers using a temporary variable.

Swap two numbers without using a third variable.

 Goal: Understand scope & reassignment.
*/

let car1 = "BMW";
const car2 = "Thar";
var car3 = "Fortuner";

car1 = "Verna";
//prints error Assignment to constant variable.
//car2 = "Dzire";
car3 = "Brezza";

console.log(car1);
console.log(car2);
console.log(car3);


//Checking the scope difference between let and var.
console.log("Let Scope");
let i=1;
console.log(i);  //1
for(let i=2; i<3; i++)
{
    console.log(i);  //2
}
console.log(i); //1


console.log("Var Scope");
var j=1;
console.log(j); //1
for(var j=3; j<4; j++)
{
    console.log(j); //3
}
console.log(j); //4

//Swap two numbers without using the third varible.
let first_var = 3;
let second_var = 4;
let temp_var;

console.log(`Variables before swapping ${first_var} and ${second_var}`);

temp_var = first_var;
first_var = second_var;
second_var = temp_var;
console.log(`Variables after swapping ${first_var} and ${second_var}`);

//Swap two numbers without using a third variable.
let num1 = 10;
let num2 = 20;
console.log(`Before swapping elements are ${num1} and ${num2}`);

num1 = num1 + num2;
num2 = num1 - num2;
num2 = num1 - num2;
console.log(`After swapping elements are ${num2} and ${num2}`);

