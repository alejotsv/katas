// Instructions:
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(arr) {
  let result = [];

  addFirstRow(arr,result);
  addEachLast(arr,result);
  addReverseLastRow(arr,result);
  console.log(result);
  console.log(arr);

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
    result.push(currentArr[currentArr.length-1])    
  }
}

// Function to add to result the last row in reversed order and delete the last row
function addReverseLastRow(arr,result) {
  result.push(...arr[arr.length-1].reverse());
  arr.splice(arr.length-1,1);  
}

function addEachFirst(arr,result) {
  
}
  
  

let array = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]


snail(array);