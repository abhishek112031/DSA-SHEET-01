function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage:
//   console.log(fibonacci(0)); // Output: 0
//   console.log(fibonacci(1)); // Output: 1
//   console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
//   console.log(fibonacci(10)); // Output: 55 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)

let fib="";
for(let i=0;i<20;i++){
    fib+=fibonacci(i)+" "
    
}
console.log(fib)
  