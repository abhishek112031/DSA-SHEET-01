function minJumps(arr, n) {
    //code here
    let step = 0;
    let curr = 0;
    let max = 0;

    for (let i = 0; i < n - 1; i++) {
        max = Math.max(max, i + arr[i]);


        //If i ever becomes equal to max,it means you cannot move forward from the current position, and the function returns -1 because you can't reach the end of the array

        if (i == max) {
            return -1;
        }

        //If i becomes equal to curr, it means you have reached the maximum reachable position from the previous jump. In this case, you increment the step counter and update curr to be equal to max, indicating that you will jump to the farthest position reachable from the current position.
        
        if (i == curr) {
            step++;
            curr = max;
        }
    }

    return step;
}
console.log(minJumps([2, 1, 0, 1], 4))
