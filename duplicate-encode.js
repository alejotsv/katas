/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
  let encodedWord = word.toLowerCase();
  let character;
  let regex;
  let specialChar = [".", "+", "*", "?", "^", "$", "(", ")", "[", "]", "{", "}", "|", "\\"];

  // Check for parentheses   
  let parentheses = ["(", ")"];
  for( par of parentheses ){
    let regexPar = new RegExp("\\" + par, "g");
    if(encodedWord.match(regexPar)){      
      if(encodedWord.match(regexPar).length>1){
        encodedWord = encodedWord.replace(regexPar,")");
      } else{
        encodedWord = encodedWord.replace(regex,"(");
      }
    }
  }
  
  // Create regex based on whether it contains special characters
  for(let i=0; i<encodedWord.length; i++) {
    character = encodedWord[i];
    if(specialChar.indexOf(character)>=0){
      regex = new RegExp("\\" + character, "g");
    } else {
      regex = new RegExp(character, "g"); 
    }    
    
    // Check matches for any character except parentheses
    if(character!=")" && character!="("){
      if(encodedWord.match(regex).length>1){
        encodedWord = encodedWord.replace(regex,")");        
      } else {
        encodedWord = encodedWord.replace(character,"(");
      }

    }
  }
  console.log(encodedWord);
  return encodedWord;
}


duplicateEncode("din");
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 