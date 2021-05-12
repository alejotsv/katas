// Instructions:

// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string

// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a,b){
  let intA = BigInt(a);
  let intB = BigInt(b);
  let intC = intA*intB;
  let c = intC.toString();
  return c;
}