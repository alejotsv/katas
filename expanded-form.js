// Instructions: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// Step 1: check length of number. The length determines how many numbers need to be added.
// Step 3: add zeroes as many times as the variable value.
// Step 2: set a variable as the length and decrease within the for loop.

function expandedForm(num) {
  let numStr = num.toString();
  let numArr = [];  
  let result = '';

  for (let i=0; i<numStr.length; i++) {
    if (numStr[i] !== '0') {
      let element = numStr[i];
      for (let j=1; j<numStr.length-i; j++){
        element += '0';
      }
      numArr.push(element);
    }
  }

  for (let k=0; k<numArr.length-1; k++){
    result += `${numArr[k]} + `;
  }

  result += numArr.pop();

  return result;

}

expandedForm(515);