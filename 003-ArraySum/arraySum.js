function sumArray(arr) {
    if (arr.length === 0) {
        return 0; // Base case
    }
    return arr[0] + sumArray(arr.slice(1)); // Recursive case
}

console.log(sumArray([1, 2, 3, 4, 5, 100])); // Expected Output: 1s15
