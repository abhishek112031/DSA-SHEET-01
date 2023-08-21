function formMagicSquare(matrix) {
    // Check if the input matrix is square
    if (!matrix || matrix.length !== matrix[0].length) {
      throw new Error("Input matrix must be square");
    }
  
    // Check if the matrix is 3x3
    if (matrix.length !== 3) {
      throw new Error("Input matrix must be 3x3");
    }
  
    // Helper function to check if all elements are unique
    const areElementsUnique = (arr) => new Set(arr).size === arr.length;
  
    // Helper function to get the sum of a row, column, or diagonal
    const getSum = (arr) => arr.reduce((sum, val) => sum + val, 0);
  
    // Check if all elements in the input matrix are unique
    const allElements = matrix.flat();
    if (!areElementsUnique(allElements)) {
      throw new Error("All elements in the input matrix must be unique");
    }
  
    // The magic constant for a 3x3 magic square
    const magicConstant = 15;
  
    // Find the sum of each row, column, and both main diagonals
    const rowSums = matrix.map(getSum);
    const columnSums = matrix.reduce((acc, row) => row.map((val, i) => (acc[i] || 0) + val), []);
    const diagonal1Sum = matrix[0][0] + matrix[1][1] + matrix[2][2];
    const diagonal2Sum = matrix[0][2] + matrix[1][1] + matrix[2][0];
  
    // Check if all sums are equal to the magic constant
    if (![...rowSums, ...columnSums, diagonal1Sum, diagonal2Sum].every((sum) => sum === magicConstant)) {
      throw new Error("Cannot form a 3x3 magic square from the given matrix");
    }
  
    // The magic square is already formed, return it as it is
    return matrix;
  }
  
  // Example usage:
  const inputMatrix = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  try {
    const magicSquare = formMagicSquare(inputMatrix);
    console.log("Magic Square:");
    console.log(magicSquare);
  } catch (error) {
    console.error(error.message);
  }
  