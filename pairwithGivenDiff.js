// Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
// Output: Pair Found: (2, 80)

// Input: arr[] = {90, 70, 20, 80, 50}, n = 45
// Output: No Such Pair


let arr = [5, 20, 3, 2, 50, 80], n = 78;

function pairWithGivenDiff(arr, n) {
     let diff = 'no such pair';
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === n) {
                diff = [arr[i], arr[j]];
                break;

            }
        }
    }
    return diff;
}
console.log(pairWithGivenDiff(arr, n));