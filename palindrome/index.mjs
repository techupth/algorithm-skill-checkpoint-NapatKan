// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));
console.log(palindrome("Fish hsif"));
