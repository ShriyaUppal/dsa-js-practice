function countFrequency(arr)
{
    const frequency = {};
    for(let i=0; i<arr.length; i++)
    {
        let num = arr[i];
        if(frequency[num])
        {
            frequency[num]++;
        }
        else{
            frequency[num] = 1;
        }
    }

    let maxCount = 0;
    let maxElement = null;
    for(let key in frequency)
    {
        if(frequency[key] > maxCount)
        {
            maxCount = frequency[key];
            maxElement = key;
        }
    }
    return Number(maxElement);
}

console.log(countFrequency([1, 2, 2, 3, 1, 4]));