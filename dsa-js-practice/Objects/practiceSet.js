/*
Create a student object and print name & marks.
Add a new key to an object.
Loop through object keys and values.
Count total properties in an object.
*/

//Solution 1:
const student = {
    name: "John",
    age: 24,
    marks: 95,
    course: "B.Tech",
    branch: "CSE"
};

let res = student.name +  " scored " + student.marks + " marks ";
console.log(res);

//Solution 2:
student.subject = "Maths";

//Solution 3: 
for(let [stu, val] of Object.entries(student)){
    console.log(stu + ":" + val);
}

//Solution 4:
let count = 0;
for(let [stu, val] of Object.entries(student)){
    count++;
}
console.log(`Total number of properties in given object are ${count}`);

let sortedKeys = Object.keys(student).sort();
console.log(`After sorting the object keys are: ${sortedKeys}`);

let type = typeof(sortedKeys);
console.log(type);

/*
You are given this object:
*/

//Extract name and role using destructuring and print:
const user = {
    id: 101,
    name: "Aman",
    role: "Developer",
    city: "Delhi"
}
const {name, role} = user;
console.log(name + " is a " + role);

//Task:Extract cs and maths using destructuring and print their sum.
const student1 = {
    name: "Riya",
    marks: {
        maths: 90,
        cs: 99,
        english: 88
    }
};

//Task:Merge both objects into a new object called profile.
const user1 = { name: "Rahul", age: 22 };
const address = { city: "Mumbai", pincode: 400001 };

//Task: Extract name and put the rest of the properties into another object called details.
const employee = {
  id: 1,
  name: "Neha",
  salary: 50000,
  dept: "IT"
};

//Task:Create a copy of this object and update the price in the copy to 55000 without changing the original.
const product = {
  name: "Laptop",
  price: 50000
};


//Task: Safely print pincode without causing error.
const user2 = {
  name: "Karan",
  address: {
    city: "Delhi"
  }
};

//Task: Create an object { score: 95 } using key.
let key = "score";

/*Task:
Print the names of users whose age is above 20.
*/
const users = [
  { name: "Amit", age: 21 },
  { name: "Riya", age: 25 },
  { name: "Neha", age: 19 }
];

/*
Task:
Convert this into an array of key-value pairs. 
*/
const marks = {
  maths: 90,
  english: 85,
  cs: 95
};

/*
Freeze & Seal
Create an object and:
Freeze it
Try to update a value
Check if it changed or not 
*/



