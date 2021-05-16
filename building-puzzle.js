// Instructions:
// In a grid of 4 by 4 squares you want to place a skyscraper in each square with only some clues:

// The height of the skyscrapers is between 1 and 4
// No two skyscrapers in a row or column may have the same number of floors
// A clue is the number of skyscrapers that you can see in a row or column from the outside
// Higher skyscrapers block the view of lower skyscrapers located behind them

// Can you write a program that can solve this puzzle?

function solvePuzzle (clues) {
  let grid = createGrid();
  console.log("Original grid");
  printGrid(grid);
  findFour(clues,grid);
  console.log("After finding fours");
  printGrid(grid);
  findRow(clues,grid);
  console.log("After finding rows");
  printGrid(grid);
}

function printGrid(grid){  
  for (let i=0;i<grid.length;i++){
    console.log(grid[i]);
  }
}

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

function findFour(clues, grid){
  
  let i;  
  for (i=0; i<4; i++){
    if(clues[i] === 1){
      grid[0][i] = 4;
    }
  }

  for (i=4; i<8; i++){
    if(clues[i] === 1){
      grid[i-4][3] = 4;
    }
  }

  let j = 3;  
  for (i=8; i<12; i++){    
    if(clues[i] === 1){
      grid[3][j] = 4;
      j--;
    } else {
      j--;
    }
  }

  j = 3;
  for (i=12; i<16; i++){
    if(clues[i] === 1){
      grid[j][0] = 4;
      j--;
    } else {
      j--;
    }
  }
}

function findRow(clues, grid){
  let i;
  for (i=0; i<4; i++){
    if(clues[i] === 4){
      for (let j=0; j<4; j++){        
        grid[j][i] = j + 1;
      }
    }
  }
  
}

let clues = [
            2, 2, 1, 3,
            2, 2, 3, 1,
            1, 2, 2, 3,
            3, 2, 1, 3
            ];





solvePuzzle(clues);