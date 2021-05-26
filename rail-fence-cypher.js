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
  let decoded = [];
  let posD = 0;
  let posS = 0;
  let slicer = 0;

  for (let i=0; i<string.length; i++){
    decoded[i] = "";
  }

  while(posD<string.length){
    decoded[posD] = string[posS];
    posD += (numberRails - 1)*2;
    posS++;
    slicer++;
  }

  string = string.slice(slicer);
 
  console.log("Decoded after first round:");
  console.log(decoded);


// After completing the first line, the rest follow the same pattern: going down = new N * 2; going up = 2.
// From there, each line is removed and going up increments times 2

  posD = 0;
  posS = 0;
  let down = true;
  let varRails = numberRails - 2;
  let starter = 1;
  let upCounter = 1;
  console.log("------------------------")
  console.log("String after first round: " + string);
  console.log("Starter = " + starter);

  while(varRails>=1){
    posD = starter;
    while(posD<decoded.length){
      decoded[posD] = string[posS];
      posS++;
      if(down){
        posD += varRails*2;
        down = false;
      } else {
        posD += 2*upCounter;
        down = true;
      }
    }
    starter++
    varRails--;
    upCounter++;
    down = true;
  }

  console.log("Final starter: " + starter);
  console.log("Final varRails: " + varRails);
  console.log("Final upCounter: " + upCounter);
  console.log("Final posS: " + posS);
  
  posD = starter;

  while(posD<decoded.length){
    decoded[posD] = string[posS];
    posS++;
    posD += upCounter*2;
  }

  console.log("------------------------")
  console.log("Final decoded:");
  console.log(decoded);
}

let encryptedPhrase = encodeRailFenceCipher(phrase, rails);
console.log(encryptedPhrase);

decodeRailFenceCipher(phrase,rails);