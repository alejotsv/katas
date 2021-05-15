// Instructions:
// In a grid of 4 by 4 squares you want to place a skyscraper in each square with only some clues:

// The height of the skyscrapers is between 1 and 4
// No two skyscrapers in a row or column may have the same number of floors
// A clue is the number of skyscrapers that you can see in a row or column from the outside
// Higher skyscrapers block the view of lower skyscrapers located behind them

// Can you write a program that can solve this puzzle?

function solvePuzzle (clues) {
  
  // Function to create empty grid
  function createGrid(){
    let result = [];
    let x = 4;
    let y = 4;
    for (let i=0;i<x;i++) {
      let temp = [];
      for (let j=0;j<y;j++) {
        temp[j] = 0;
      }
      result[i] = temp;
    }
    return result;
  }

  // Function to check if the puzzle is solved
  function isDone(arr){
    let done = true;
    for(let i=0; i<arr.length; i++){
      let sum = arr[i].reduce((a,b) => a+b, 0);
      if(sum<10){
        done = false;
        break;
      }    
    }
    return done;
  }
  
  // Create grid
  let result = createGrid();
}