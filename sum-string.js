// Instructions:

// Given the string representations of two integers,
// return the string representation of the sum of those integers.

function sumStrings(a,b){
  let c = BigInt(0);
  let d = BigInt(0);

  if(a.length>0){
    c = BigInt(a);
  }

  if(b.length>0){
    d = BigInt(b);
  }

  let sum = c + d;
  let result = sum.toString();
  return result
}