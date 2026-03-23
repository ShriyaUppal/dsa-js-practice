let name = "Shriya";
let role = "QA turned Dev";
console.log(name);
console.log(role);

let nums = [1, 2, 3, 4, 5];
let squared = nums.map(x => x*x);
console.log(squared);

function greet(person){
    return "Hello " + person + " ! Welcome to backend";
}

console.log(greet(name));