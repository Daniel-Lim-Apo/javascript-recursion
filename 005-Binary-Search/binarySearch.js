// Binary search is a method for finding an element within a sorted array.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; // Base case: not found
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid; // Base case: found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1); // Recursive case: search left half
    } else {
        return binarySearch(arr, target, mid + 1, high); // Recursive case: search right half
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // Expected Output: 6
