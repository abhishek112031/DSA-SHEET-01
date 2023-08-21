function findMinMaxSum(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
    const maxSum = arr.slice(1).reduce((acc, num) => acc + num, 0);
    return [minSum, maxSum];
  }
  
  // Test the function with an example array of five positive integers
  const exampleArray = [5, 10, 3, 7, 1];
  const [minValue, maxValue] = findMinMaxSum(exampleArray);
  
  console.log(minValue, maxValue);
  