// Instructions

// Create two functions to encode and then decode a string using the Rail Fence Cipher.

// This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".

// First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string.

// Each "rail" is then read left to right to derive the encoded string.

let phrase = "This is a cool phrase";
let rails = 3;

function encodeRailFenceCipher(string, numberRails) {
  let encrypted = '';
  let rows = [];

  for (let i=0; i<numberRails; i++){
    rows.push("");
  }
  
  let pos = 0;
  let up = true;

  for (let j=0; j<string.length; j++){
    rows[pos] += string[j];
    if (pos<numberRails-1 && up){
      pos++;
    } else if (pos>0){
      pos--;
      up = false;
    } else {
      pos++;
      up = true;
    }
  }

  for (let k=0; k<rows.length; k++) {
    encrypted += rows[k];
  }
  
  return encrypted;
}

function decodeRailFenceCipher(string, numberRails) {
  console.log(string);
  console.log(rails);
}

let encryptedPhrase = encodeRailFenceCipher(phrase, rails);
console.log(encryptedPhrase);

decodeRailFenceCipher(phrase,rails);