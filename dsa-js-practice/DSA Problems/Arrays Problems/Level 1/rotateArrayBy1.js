function rotateByK(arr, k)
{
    let n = arr.length;
    k = k%n;

    for(let r=0; r<k; r++)
    {
        let last = arr[n-1];
        for(let i=n-1; i>0; i--)
        {
            arr[i] = arr[i-1];
        }
        arr[0] = last;

    }
    return arr;
}

console.log(rotateByK([1,2,3,4,5], 3));
/*
5, 1, 2, 3, 4
4, 5, 1, 2, 3
3, 4, 5, 1, 2
*/