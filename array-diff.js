// Instructions:

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// If a value is present in b, all of its occurrences must be removed from the other

function array_diff(a, b) {
  let result = [];
  for (let i=0; i<a.length; i++){
    if (!b.includes(a[i])){
      result.push(a[i]);
    }
  }
  return result;
}

array_diff([1,2,2,2,3],[2,3]);