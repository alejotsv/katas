/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  console.log(word);
  let encodedWord = word.split("");
  for([i,letter] of encodedWord.entries()) {
    if(letter==")" || letter==")"){
      continue;
    } else{
      if(encodedWord.indexOf(letter,i+1)>=0){
        console.log(letter);
      }
    }
  }
  return encodedWord.toString();
}


duplicateEncode("cellphone");