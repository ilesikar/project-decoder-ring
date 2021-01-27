// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  const referenceAlphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length != 26) return false;
    const lowercaseInput = input.toLowerCase();
    const inputArray = lowercaseInput.split('');
    const alphabetArray = alphabet.split('');
    const checkerArray = [];
    for (char of alphabet) {
      if (checkerArray.includes(char)) {
        return false;
      }
      checkerArray.push(char);
    }

    if (encode) {
      const returnArray = inputArray.map(char => {
        if (char === " ") return " ";
        const index = referenceAlphabet.indexOf(char);
        return alphabet[index];
      });
      return returnArray.join('')
    } else {
      const returnArray = inputArray.map(char => {
        if (char === " ") return " ";
        const index = alphabet.indexOf(char);
        
        return referenceAlphabet[index];
      });
      
      return returnArray.join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
