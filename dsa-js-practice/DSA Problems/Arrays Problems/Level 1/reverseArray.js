
/*
function reverse(arr)
{
    const result = [];
    for(let i=arr.length-1; i>=0; i--)
    {
        result.push(arr[i]);
    }
    return result;
}*/

//Effecient Approach.
function reverse(arr){
    let start = 0;
    let end = arr.length-1;

    while(start < end)
    {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Reversed Array is: ", reverse(arr));