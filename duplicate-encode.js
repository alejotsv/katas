/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  let encodedWord = word.toLowerCase();
  let letter;
  
  for(let i=0; i<encodedWord.length; i++) {
    letter = encodedWord[i];
    if(letter!=")" && letter!=")"){
      if(encodedWord.indexOf(letter,i+1)>=0){
        encodedWord = encodedWord.replace(new RegExp(letter, "g"),")");        
      } else {
        encodedWord = encodedWord.replace(letter,"(");
      }

    }
  }
  console.log(encodedWord);
  return encodedWord;
}