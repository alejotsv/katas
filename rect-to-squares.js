// Instructions:

// Create an algorithm to return how may squares fit in a rectangle and the size of each square.

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array with the size of each of the squares.

function sqInRect(lng, wdth){
  if (lng === wdth){
    return null;
  } else {
  let squares = [];
  let x = lng;
  let y = wdth;
  let z = 0;

  while (x%y !== 0) {
    z = x%y;
    for (let i=1; i<x/y; i++){
      squares.push(y);
    }
    if (z>y){
      x = z;
    } else {
      x = y;
      y = z;
    }
  }

  for (let i=0; i<x/y; i++){
    squares.push(y);
  }

  return squares;
}
}

sqInRect(7,7);