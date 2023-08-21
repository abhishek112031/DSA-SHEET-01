function calculateRatios(arr) {
    const totalElements = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
  
    arr.forEach(num => {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
    });
  
    const positiveRatio = positiveCount / totalElements;
    const negativeRatio = negativeCount / totalElements;
    const zeroRatio = zeroCount / totalElements;
  
    return [positiveRatio, negativeRatio, zeroRatio];
  }
  
  // Test the function with an example array
  const exampleArray = [-4, 3, -9, 0, 4, 1];
//   const [positiveRatio, negativeRatio, zeroRatio] = 
console.log(calculateRatios(exampleArray));
  
//   console.log(positiveRatio.toFixed(6));
//   console.log(negativeRatio.toFixed(6));
//   console.log(zeroRatio.toFixed(6));
  