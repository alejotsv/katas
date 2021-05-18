// Instructions

// Create two functions to encode and then decode a string using the Rail Fence Cipher.

// This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".

// First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string.

// Each "rail" is then read left to right to derive the encoded string.

let phrase = "This is a cool phrase";
let rails = 3;

function encodeRailFenceCipher(string, numberRails) {
  let encrypted;
  let rows = [];

  for (let i=0; i<numberRails; i++){
    rows.push("");
  }
  
  console.log(rows);
  console.log(rows.length);  
  
}

function decodeRailFenceCipher(string, numberRails) {
  console.log(string);
  console.log(rails);
}

encodeRailFenceCipher(phrase, rails);
// decodeRailFenceCipher(phrase,rails);