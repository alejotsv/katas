// Instructions: Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(int) {
  intBit = int.toString(2).toString();
  let result = 0;
  
  for (let i=0; i<intBit.length; i++){
    if(intBit[i] === '1'){
      result += 1;
    }
  }
  
  console.log(intBit);
  return result;
}

countBits(2141421);