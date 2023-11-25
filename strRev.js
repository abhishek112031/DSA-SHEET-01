function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str === '' || str.length === 1) {
      return str;
    }
    
    // Recursive case: reverse the substring after the first character and append the first character to it

    return reverseString(str.slice(1)) + str[0];
  }
  
  // Example usage:
  const originalString = 'Hello, World!';
  const reversedString = reverseString(originalString);


