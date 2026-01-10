/*
Check if a user is eligible to vote.
Compare two values using == vs ===.
*/

let age = 17;

if(age >= 18){
    console.log("User is eligible to vote");
}
else{
    console.log("User is not eligible to vote");
}


let num1 = 10;
let num2 = "10";

console.log(`${num1} == ${num2} → ${num1 == num2}`); //it only compares values.
console.log(`${num1} === ${num2} → ${num1 === num2}`); //comapre values as well as data type.

