// Instructions: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let oneDigit = false;  
  let numString = '';
  let pers = 0; 

  if(num.toString().length<=1){
    oneDigit = true;
  }
  
  while(!oneDigit){
    numString = num.toString();
    num = 1;
    for (let i=0; i<numString.length; i++){
      num *= numString[i];      
    }    
    pers += 1;
    if (num.toString().length === 1){
    oneDigit = true;
    }
  }

  return pers;
}

persistence(55253);