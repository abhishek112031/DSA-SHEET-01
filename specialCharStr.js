// function processInput(input) {
//     let output = '';
//     let i = 0;

//     while (i < input.length) {
//       if (input[i] === '@' && i + 1 < input.length) {
//         // Convert the next character to uppercase
//         output += input[i + 1].toUpperCase();
//         i += 2; // Skip the next character
//       } else if (input[i] === '#' && i + 1 < input.length) {
//         // Convert the next character to lowercase
//         output += input[i + 1].toLowerCase();
//         i += 2; // Skip the next character
//       } else if (input[i] === '$') {
//         // Find the substring after '$' to the next special character
//         const startIndex = i + 1;
//         let endIndex = startIndex;
//         while (endIndex < input.length && !isSpecialCharacter(input[endIndex])) {
//           endIndex++;
//         }

//         // Reverse the substring and add it to the output
//         const substring = input.substring(startIndex, endIndex);
//         output += reverseString(substring);
//         i = endIndex;
//       } else if (input[i] === '%') {
//         // Duplicate the next character
//         if (i + 1 < input.length) {
//           output += input[i + 1] + input[i + 1];
//           i += 2; // Skip the next character
//         }
//       } else {
//         // If it's not a special character, add it to the output
//         output += input[i];
//         i++;
//       }
//     }

//     return output;
//   }

//   function isSpecialCharacter(char) {
//     return char === '@' || char === '#' || char === '$' || char === '%';
//   }

//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   }

//   // Example usage:
//   const input = "Hello$world@O#123%!";
//   const result = processInput(input);
//   console.log(result); // Output: "dlroWHELLOo321O!!"



function processInput(input) {
  let res = '';
  let i = 0;

  while (i < input.length) {
    if (input[i] === '#' && i + 1 < input.length) {
      res += input[i + 1].toUpperCase();
      i += 2;
    }
    else if (input[i] === '@' && i + 1 < input.length) {
      res += input[i + 1].toUpperCase();
      i += 2;
    }
    else if (input[i] === '$' && i + 1 < input.length) {

      let fIdx = i + 1;
      let eIdx = fIdx;

      while (!isSpecialChar(input[eIdx]) && eIdx < input.length) {
        eIdx++;
      }
      let subStr = input.substring(fIdx, eIdx);
      res += reverseStr(subStr);
      i = eIdx;
    }
    else if (input[i] === '%' && i + 1 < input.length) {
      res += input[i + 1] + input[i + 1];
      i += 2;
    }
    else {
      res+=input[i];
      i++
    }





  }
return res;

}


function isSpecialChar(char) {
  return char === '@' || char === '#' || char === '$' || char === '%'
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}


console.log(processInput('hello#world$mybaD@krishna!ofline%into'))