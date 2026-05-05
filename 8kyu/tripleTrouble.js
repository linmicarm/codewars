/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
*/

//My solution://

//Define a function called tripleTrouble that takes three strings as arguments.
function tripleTrouble(one, two, three){
//Initialize an empty string called result to store the final output.
  let result = ""
//Use a for loop to iterate through the characters of the first string (one). The loop will run from 0 to the length of the first string.
    for(i = 0; i < one.length; i++) {
//Inside the loop, concatenate the characters from all three strings at the current index (i) and add them to the result string.
      result +=  one[i] + two[i] + three[i]
    }
//After the loop has finished, return the result string which now contains the combined characters from all three input strings.
  return result
 }
