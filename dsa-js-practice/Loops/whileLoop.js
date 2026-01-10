//Reverse a number.
let num = 345;
let res=0;
while(num > 0){
    let digit=num%10;
    res = res*10 + digit;
    num = Math.floor(num/10);


}
console.log(res);

//Count digits in a number.
let number = 46578;
let count=0;
while(number > 0)
{
    count++;
    number = Math.floor(number/10);
}

console.log(`The number of digits in ${number} is: ${count}`);


//To check whether the number is pallindrome or not.
let input = 1222;
let num1 = input;
let result = 0;
while(num1 > 0)
{
    let digit = num1%10;
    result = result*10 + digit;
    num1 = Math.floor(num1/10);
}

if(result === input)
{
    console.log(`${input} is a pallindrome number`);
}
else{
    console.log(`${input} is not a pallindrome number`)
}