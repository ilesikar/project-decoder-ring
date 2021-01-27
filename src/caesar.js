// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const lowercaseInput = input.toLowerCase();
    inputArray = lowercaseInput.split("");
    if (!encode) shift = -shift;
    const returnArray = inputArray.map(letter => {
      if (!alphabet.includes(letter)) {
        return (letter);
      }
      const letterIndex = alphabet.indexOf(letter);
      returnLetter = "";
      if (letterIndex + shift > 25) {
        return alphabet[letterIndex - 26 + shift];
      }
      if (letterIndex + shift < 0) {
        return alphabet[26 + letterIndex + shift];
      }
      return alphabet[letterIndex + shift];
    });
    return returnArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
