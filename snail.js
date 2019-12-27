// Instructions:
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(arr) {
  let result = [];

  addFirstRow(arr,result);
}

// Function to add to result first row of array and delete first row from original array
function addFirstRow(arr,result) {
  result = result.concat(arr[0]);
  arr.splice(0,1);
}
  
  

let array = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]


snail(array);