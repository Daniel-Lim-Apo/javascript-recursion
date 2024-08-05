function factorial(n) {
    if (n === 0) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(1)); // Expected Output: 1
console.log(factorial(2)); // Expected Output: 2
console.log(factorial(3)); // Expected Output: 6
console.log(factorial(4)); // Expected Output: 24
console.log(factorial(5)); // Expected Output: 120
console.log(factorial(6)); // Expected Output: 720
console.log(factorial(7)); // Expected Output: 5040
console.log(factorial(8)); // Expected Output: 40320
console.log(factorial(9)); // Expected Output: 362880
console.log(factorial(10)); // Expected Output: 3628800
