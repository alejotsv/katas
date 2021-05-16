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
  if(clues[0]===1||clues[15]===1){
    grid[0][0] = 4
  }
  if(clues[1]===1){
    grid[0][1] = 4
  }
  if(clues[2]===1){
    grid[0][2] = 4
  }
  if(clues[3]===1||clues[4]===1){
    grid[0][3] = 4
  }
  if(clues[5]===1){
    grid[1][3] = 4
  }
  if(clues[6]===1){
    grid[2][3] = 4
  }
  if(clues[7]===1||clues[8]===1){
    grid[3][3] = 4
  }
  if(clues[9]===1){
    grid[3][2] = 4
  }
  if(clues[10]===1){
    grid[3][1] = 4
  }
  if(clues[11]===1||clues[12]===1){
    grid[3][0] = 4
  }
  if(clues[13]===1){
    grid[2][0] = 4
  }
  if(clues[14]===1){
    grid[1][0] = 4
  } 
}

let clues = [
            2, 2, 1, 3,
            2, 2, 3, 1,
            1, 2, 2, 3,
            3, 2, 1, 3
            ];





solvePuzzle(clues);