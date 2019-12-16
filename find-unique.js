// Instructions:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// TODO: Still need to optimize more

function findUniq(arr) {
  let finalArr = [];
  let i = 0;

  while(finalArr.length !== 1 && i < arr.length){
    finalArr = arr.filter(number => number === arr[i]);    
    i++;
  }

  if (finalArr.length === 1){
    return finalArr[0];
  } else {
    return 'There are no unique values';
  }
}

let myArr = [3, 3, 5, 5, 1, 1, 4, 6];

findUniq(myArr);

function simpleFind(arr){
  let result = null;  
  let num;
  
  while (result === null) {
    num = arr.splice(0,1)[0];    
    if (arr.indexOf(num) === -1){
      result = num;      
    } else {
        while (arr.indexOf(num) >= 0){       
        arr.splice(arr.indexOf(num),1);
      }
  } 


}
  return result;
}

simpleFind(myArr);

function simplerFindUnique(arr) {

  // Set an array with all unique values
  let uniqueArray = [...new Set(arr)];
  let firstIndex;
  
  // Loop through the unique values array (shorter array)
  for (let i=0; i<uniqueArray.length; i++){
    // Find the first index in the original array of each unique value
    firstIndex = arr.indexOf(uniqueArray[i]);
    // Remove the first iteration of the value
    arr.splice(firstIndex,1);
    // Check if the value is repeated in the array
    if (arr.indexOf(uniqueArray[i]) === -1){
      return uniqueArray[i];
    }
  }

}

let thisArr = [2,5,6,1,1,5,7,6,6,7,3,3,2,1,1,2];

simplerFindUniq(thisArr);