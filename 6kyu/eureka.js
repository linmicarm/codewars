/*
Task
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[a,b]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!
*/

function isEureka(num) {
  const digits = String(num).split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = Number(digits[i]);
    sum += digit ** (i + 1);
  }
  return sum === num;
}

function sumDigPow(a, b) {
  const result = [];
  for (let num = a; num <= b; num++) {
    if (isEureka(num)) {
      result.push(num);
    }
  }
  return result;
}
