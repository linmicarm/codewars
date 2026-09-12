/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

//encrypt
function encrypt(text, n) {
  if (!text || n <= 0) return text;

  for (let i = 0; i < n; i++) {
    const odds = [...text].filter((char, idx) => idx % 2 === 1);
    const evens = [...text].filter((char, idx) => idx % 2 === 0);
    text = odds.join("") + evens.join("");
  }

  return text;
}

//decrypt
function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  for (let i = 0; i < n; i++) {
    const half = Math.floor(encryptedText.length / 2);
    const odds = encryptedText.slice(0, half);      // first half = odds
    const evens = encryptedText.slice(half);        // second half = evens

    let result = "";
    for (let j = 0; j < evens.length; j++) {
      result += evens[j];                            // even-indexed char
      if (j < odds.length) {
        result += odds[j];                           // odd-indexed char (if it exists)
      }
    }
    encryptedText = result;
  }

  return encryptedText;
}
