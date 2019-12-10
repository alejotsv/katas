// Instructions: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// Step 1: check length of number. The length determines how many numbers need to be added.
// Step 3: add zeroes as many times as the variable value.
// Step 2: set a variable as the length and decrease within the for loop.

function expandedForm(num) {
  let numStr = num.toString();
  let zeroes = numStr.length;
  let result = '';

  if(numStr.charAt(numStr.length-1) !== '0'){
    for (let i=0; i<numStr.length-1; i++){
      if (numStr.charAt(i) !== '0'){
        let element = `${numStr.charAt(i)}`;
          for (let j=0; j<numStr.length-1-i;j++){
            element += '0';
          }
          element += ' + '
        result += element;
      }
    }
    result += numStr.charAt(numStr.length-1);
  } else {    
    console.log('last number is zero');
  }

  return result;

}

expandedForm(4503520);