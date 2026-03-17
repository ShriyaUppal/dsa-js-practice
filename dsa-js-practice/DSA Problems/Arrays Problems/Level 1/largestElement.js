function findLargest(arr){
    let largest = arr[0];
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i] > largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

const arr = [1, 2, 15, 9, 10];
let largest = findLargest(arr);

console.log("Largest element of the array is: ", largest);