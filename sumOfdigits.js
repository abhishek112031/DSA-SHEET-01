function sumOfDigits(number) {
    // Base case: If the number is a single digit, return the number itself
    if (number < 10) {
      return number;
    }
    
    // Recursive case: Sum the last digit with the sum of digits of the rest of the number
    const lastDigit = number % 10;
    const remainingNumber = Math.floor(number / 10);
    return lastDigit + sumOfDigits(remainingNumber);
  }
  
  // Example usage:
  const number = 12345;
  const result = sumOfDigits(number);
  console.log(`The sum of digits in ${number} is ${result}`);
  