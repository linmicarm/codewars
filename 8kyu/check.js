/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

//My solution://

//Define a function called check that takes in an array a and a value x. Use the includes method to check if x is present in the array a. If it is, return true; otherwise, return false.
const check = (a,x) => a.includes(x) ? true : false;