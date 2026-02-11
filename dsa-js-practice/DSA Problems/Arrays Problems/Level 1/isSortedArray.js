function isSortedArray(arr)
{
    let isSorted = true;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            isSorted = false;
            break;
        }
    }
    return isSorted;
}
console.log(isSortedArray([1, 2, 3, 4]));
console.log(isSortedArray([1, 3, 2, 4]));