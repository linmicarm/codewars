/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.
*/

function countSmileys(arr) {
  const eyes = [":", ";"];
  const noses = ["-", "~"];
  const mouths = [")", "D"];
  let count = 0;

  for (const face of arr) {
    if (face.length < 2 || face.length > 3) continue;  // must be 2 or 3 chars

    const validEyes = eyes.includes(face[0]);
    const validNose = face.length === 2 || noses.includes(face[1]);
    const validMouth = mouths.includes(face[face.length - 1]);

    if (validEyes && validNose && validMouth) {
      count++;
    }
  }

  return count;
}
