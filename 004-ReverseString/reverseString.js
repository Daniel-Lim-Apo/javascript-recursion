function reverseString(str) {
    if (str === "") {
        return ""; // Base case
    }
    return reverseString(str.substring(1)) + str.charAt(0); // Recursive case
}

console.log(reverseString("hello")); // Expected Output: "olleh"
console.log(reverseString("Madam")); // Expected Output: "madaM"
console.log(reverseString("Radar")); // Expected Output: "radaR"
