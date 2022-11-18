/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  let encodedWord = word.toLowerCase();
  let letter;
  let regex;
  
  for(let i=0; i<encodedWord.length; i++) {
    letter = encodedWord[i];
    if(letter==")" || letter==")"){
      regex = new RegExp("\\" + letter, "g");
    } else {
      regex = new RegExp(letter, "g"); 
    }  
    
    if(letter!=")" && letter!=")"){
      if(encodedWord.match(regex).length>1){
        console.log(letter);
        console.log(encodedWord.match(regex));
        encodedWord = encodedWord.replace(regex,")");        
      } else {
        console.log(letter);
        console.log(encodedWord.match(regex));
        encodedWord = encodedWord.replace(letter,"(");
      }

    }
  }
  console.log(encodedWord);
  return encodedWord;
}


duplicateEncode("din");
duplicateEncode("recede");
// duplicateEncode("Success");
// duplicateEncode("(( @");

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


