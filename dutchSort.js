function sortArray(arr) {
    let low = 0;
    let high = arr.length - 1;
    let i = 0;

    while (i <= high) {
        if (arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            low++;
            i++;
        } else if (arr[i] === 2) {
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
        } else {
            i++;
        }
    }

    return arr;
}

const inputArray = [1, 0, 2, 0, 1, 2];
const sortedArray = sortArray(inputArray);
console.log(sortedArray);  // Output: [0, 0, 1, 1, 2, 2]

//the idea behind this algorithm is to maintain three pointers: low, i, and high. The low pointer keeps track of the position where the next 0 should go, the high pointer keeps track of the position where the next 2 should go, and the i pointer is used to iterate through the array. As you iterate through the array, you swap elements accordingly to their values, pushing 0s to the beginning and 2s to the end, which effectively sorts the array.





