/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  // Convert the string to lowercase and remove non-alphabetic characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let vowelsCount = 0;

  // Loop through the string and count vowels
  for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          vowelsCount++;
      }
  }

  return vowelsCount;  // Return the count of vowels
}

module.exports = countVowels;
