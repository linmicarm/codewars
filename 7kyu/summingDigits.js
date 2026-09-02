/*
Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  return Math.abs(number)          // strip the negative sign: -32 -> 32
    .toString()                    // "32"
    .split("")                     // ["3", "2"]
    .map(Number)                   // [3, 2]  (convert each char back to a number)
    .reduce((sum, digit) => sum + digit, 0);   // 3 + 2 = 5
}
