/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//MySolution://

//Declare a function called getCount that takes in a string as a parameter
const getCount = (str) => {
  //Start the counter at 0
  let count = 0;
  //Split the string into individual characters and loop over each one
  str.split("").forEach((letter) => {
    //Convert the letter to lowercase
    letter = letter.toLowerCase();
    //Check if the letter is a vowel
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    )
      //If the letter is a vowel, add 1 to the counter
      count++;
  });
  //Return the final count
  return count;
};
