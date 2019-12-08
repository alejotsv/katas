// Instructions:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
  let length = str.length;
  let camelStr = '';
  let goUp = false;
  for (let i=0; i<length; i++){
    if (str[i] === '-' || str[i] === '_'){      
      goUp = true;
    }
    else if (goUp){
      camelStr += str[i].toUpperCase();
      goUp = false;
    } else{
      camelStr += str[i];
    }
  }
  return camelStr;
}

str = 'the-stealth-warrior';
str2 = 'The_Stealth_Warrior';

toCamelCase(str);
toCamelCase(str2);