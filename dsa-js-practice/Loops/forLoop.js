
//Print numbers from 1 to n.
console.log("Printing numbers from 1 to 10");
for(let i=1; i<=10; i++){
    console.log(i);
}

//Print even numbers from 1 to 50.
console.log("Printing even numbers from 1 to 50");
for(let i=1; i<=50; i++)
{
    if(i%2 === 0)
    {
        console.log(i);
    }
}

//Print multiplication table of a number
let num = 3;
console.log(`Printing the multiplication table of ${num}`)
for(let i=1; i<=10; i++)
{
    console.log(num * i);
}    

//Sum numbers from 1 to n
let n=10;
let sum=0;
for(let j=1; j<=n; j++)
{
    sum += j;
}
console.log(`Sum of numbers from 1 to ${n} is: ${sum}`);