// Instructions:
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(arr) {
  let result = [];

  if (arr.length === 1){
    return arr[0];
  }

  if (arr[0].length){

    while(arr.length > 0){
      addFirstRow(arr,result);
      if (arr.length === 1){
        addReverseLastRow(arr,result);
      }
      if (arr.length > 1){
        addEachLast(arr,result);
        addReverseLastRow(arr,result);
      }
      if (arr.length > 1){
        addEachFirst(arr,result);
      }
    }

  }
  
  return result;

}

// Function to add to result first row of array and delete first row from original array
function addFirstRow(arr,result) {
  result.push(...arr[0]);
  arr.splice(0,1);
}

// Function to add the last element of each row, until the second to last row, and delete each element
function addEachLast(arr,result){
  let currentArr;
  for (let i=0; i<arr.length-1; i++){
    currentArr = arr[i];
    result.push(...currentArr.splice(currentArr.length-1,1));    
  }
}

// Function to add to result the last row in reversed order and delete the last row
function addReverseLastRow(arr,result) {
  result.push(...arr[arr.length-1].reverse());
  arr.splice(arr.length-1,1);  
}

// Function to add to result the remaining first elements of each row and delete them from original array
function addEachFirst(arr,result) {
  let currentArr;
  for (let i=arr.length-1; i>0; i--){
    currentArr = arr[i];
    result.push(...currentArr.splice(0,1));
  }
}
  
  

let array = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
]

let arrayS = [
  [1,2],
  [4,3]
]


snail(array);

