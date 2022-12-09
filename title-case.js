/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
  let firstLetter  = word.charAt(0).toUpperCase();
  let finalWord = firstLetter + word.slice(1);
  return finalWord;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
  let finalStr = "";
  let start = 0;
  let word;
  let end = str.indexOf(" ");
  do {
      if (end == -1){
          word = capitalizeWord(str.slice(start));
      } else {
          word = capitalizeWord(str.slice(start, end));
          start = end+1;
          end = str.indexOf(" ", start);
      }
      finalStr += word + " ";
  } while (end > -1);
  
  finalStr += capitalizeWord(str.slice(start));
  
  return finalStr;
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));