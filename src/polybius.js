// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  referenceSquare = [
    ['a','b','c','d','e'],
    ['f','g','h','i/j','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']
  ]

  function polybius(input, encode = true) {
    if (!encode && input.split(' ').join('').length % 2 === 1) {
      return false;
    }
    const lowercaseInput = input.toLowerCase();
    if (encode) {
      const inputArray = lowercaseInput.split('');
      const returnArray = inputArray.map(char => {
        if (char === 'i' || char === 'j') return '42';
        if (char === ' ') return char;
        else {
          var rowIndex = 0;
          var colIndex = 0;
          for (row of referenceSquare) {
            for (col of row) {
              if (char === col) {
                return (colIndex+1).toString() + (rowIndex+1).toString();
              }
              colIndex++;
            }
            colIndex = 0;
            rowIndex++;
          }
        }
      });
      return returnArray.join('');
    } else {
      const splitArray = lowercaseInput.split(' ');
      console.log(splitArray);
      inputArray = [];
      for (let i = 0; i < splitArray.length; i++) {
        if (splitArray.length === i + 1) {
          inputArray.push(...splitArray[i].match(/.{1,2}/g));
        } else {
          inputArray.push(...splitArray[i].match(/.{1,2}/g));
          inputArray.push(" ");
        }
      }
      console.log(inputArray);
      const returnArray = inputArray.map(num => {
        if (num === '42') return '(i/j)';
        if (num === ' ') return num;
        else {
          console.log(`num: ${num}`);
          return referenceSquare[num[1]-1][num[0]-1];
        }
      });
      return returnArray.join('');
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
