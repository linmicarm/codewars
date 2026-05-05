
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//My solution://

//Declare a function called reverseSeq that takes in a parameter n
const reverseSeq = n => {
//Create an empty array called arr
  let arr = [];
//Use a for loop that starts at n and decrements down to 1
for (let i = n; i > 0; i--) {
//In each iteration, push the current value of i into the arr
    arr.push(i);
  }
//After the loop, return the arr
  return arr;
};
