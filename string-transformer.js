// Instructions:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
// "Example Input" ==> "iNPUT eXAMPLE"

const string = 'This is a Brand nEw eXample';

function stringTransformer(string) {
  let arr = string.split(' ');
  let revArr = arr.reverse();
  let finalString = '';

  for (let i=0; i<revArr.length; i++){
    if (i<revArr.length-1){
      let word = revArr[i];
      for (let j=0; j<word.length;j++){
        if (word[j] === word[j].toLowerCase()){
          let letter = word[j].toUpperCase();
          finalString += letter;          
        }
        else {
          let letter = word[j].toLowerCase();
          finalString += letter; 
        }
      }
      finalString += ' ';
    }
    else {
      let word = revArr[i];
      for (let j=0; j<word.length;j++){
        if (word[j] === word[j].toLowerCase()){
          let letter = word[j].toUpperCase();
          finalString += letter;          
        }
        else {
          let letter = word[j].toLowerCase();
          finalString += letter; 
        }
      }
    }
    
  }
  
  return finalString;
}

stringTransformer(string);