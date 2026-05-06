/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

//My Solution://

//Add a method called 'toJadenCase' to every string in JavaScript
Object.defineProperty(
  String.prototype,
  "toJadenCase",
  //Define the method as a function; 'this' refers to the string it's called on
  {
    value: function () {
      //Split the string into an array of words to be manipulated individually
      return (
        this.split(" ")
          //Create a new area where the first letter of each word is capitalized and the rest of the word is unchanged
          .map((word) => word[0].toUpperCase() + word.slice(1))
          //Join the words back into a single string
          .join(" ")
      );
    },
  },
);
