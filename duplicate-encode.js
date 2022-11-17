/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  console.log(word);
  let encodedWord = word.toLowerCase();
  
  for(let i=0; i<encodedWord.length; i++) {
    if(encodedWord[i]!=")" && encodedWord[i]!=")"){
        // if(encodedWord.indexOf(word[i],i+1)>=0){
        //   console.log(word[i]);
      console.log(encodedWord[i]);
    }
  }
  return encodedWord;
}


duplicateEncode("cEllphone");