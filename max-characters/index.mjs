// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (string) => {
  const count = {};
  let maxCharacter = "";
  let maxCount = 0;

  for (let character of string) {
    if (character !== " ") {
      count[character] = (count[character] || 0) + 1;
    }
  }

  for (let character in count) {
    if (count[character] > maxCount) {
      maxCount = count[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));

console.log(getMaxCharacters("aaaaapple 1231111"));
