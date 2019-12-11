// Instructions:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// TODO: Optimize function to run faster
// Use splice() to take the the first element and then indexOf() to find a second ocurrence
// Proceed until there are no more instances
// Start again (always from index 0), until the first indexOf() is -1

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