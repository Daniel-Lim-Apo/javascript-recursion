// calculates the sum of all odd Fibonacci numbers that are less than a given number num.
function sumFibs(num) {
  var result = 0;
  function fibonacci(num) {
    if (num < 1) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  for (var i = 0; i <= num; i++) {
    if (fibonacci(i) % 2 === 1 && fibonacci(i) < num) {
      result += fibonacci(i);
    }
  }
  return result;
}
console.log(sumFibs(5));
