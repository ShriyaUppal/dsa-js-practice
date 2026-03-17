function findSmallest(arr)
{
    let smallest = arr[0];
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i] < smallest)
        {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [90, 2, 15, 9, 10];
console.log("Samllest Element of the array is: ", findSmallest(arr));