function sudoku(puzzle) {
  let isCompleted = false;
  let x;
  let y;
  let emptyCellCoor = [];
  let possibilities = [];
  let zeroAt;
  let sudokuNumbers = [1,2,3,4,5,6,7,8,9];
  let numberFound;
  
  puzzleGrid = createAllGrids();    
  for(let i=0; i<9; i++){
    // set x to current row
    x = i;
    console.log(puzzle[i]);
    zeroAt = puzzle[i].indexOf(0);
    if(zeroAt >= 0){
      // Set y to empty cell position
      y = zeroAt;
      emptyCellCoor = [x, y];
      console.log(emptyCellCoor)
      // Check if numbers from 1 to 9 can be in this cell
      sudokuNumbers.every((number) => {        
        return findInRow(number, puzzle, i);
      });
      // If there are two possibilities, move to next cell
      // If there is only one possiblity, replace cell with that value      
      console.log("First empty cell is at position: " + zeroAt);      
    } else {
      console.log("No empty cells here");
    }
      
  }
}

let puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
];

// Function to find a number in a row
function findInRow(num, puzzle, row){
  let isInRow = false;
  let arr = puzzle[row];
  for(let i=0; i<9; i++){
    if(arr[i] == num){
      isInRow = true;
      i = 9;
    }
  }
  return isInRow;
}

// Function to find a number in a column
function findInColumn(num, puzzle, column){
  let isInColumn = false;
  for(let i=0; i<9; i++){
    if(puzzle[i][column] == num){
      isInColumn = true;
      i = 9;
    }
  }
  return isInColumn;
}

// Function to find in which square a set of coordinates is
function whichSquare(coordinates, grid){    
  // Initialize variable that will hold the square number of the coordinates
  // Start with invalid value, in case coordinates are incorrect
  let squareIn;
  // Create string version of coordinates to look inside each grid
  let coorStr = JSON.stringify(coordinates);  
  // Instantiate variable that will hold string version of each square
  let squareStr;
  
  grid.every((square) => {
    squareStr = JSON.stringify(square);    
    
    if(squareStr.indexOf(coorStr) >= 0){      
      squareIn = square;      
      return false;
    } else {
      return true;
    }
    
  });

  return squareIn;
  
}

// Function to find a number in a square
function findInSquare(num, square, puzzle){
  console.log(num);
  let isInSquare = false;
  let x;
  let y;
  let numInSquare;
  for(let i=0; i<3; i++){    
    for(let j=0; j<3; j++){      
      x = square[i][j][0];
      y = square[i][j][1];      
      numInSquare = puzzle[x][y];
      if(numInSquare == num){        
        isInSquare = true;        
        break;  
      }      
    }
  }
  
  return isInSquare;
  
}

// Function to create a Sudoku grill, based on the starting coordinates
function createGrid(startX, startY){
  let x = startX;
  let y;
  let finalArr = [];
  let tempArr = [];

  for(let i=0; i<3; i++){
    y = startY;
    tempArr = [];
    for(let j=0; j<3; j++){
      let coor = [x, y];      
      tempArr.push(coor);      
      y++;
    }
    x++;
    finalArr.push(tempArr);    
  }  
  return finalArr;
}

// Function to set the initial coordinates for each square in a Sudoku puzzle
function setInitialCoordinates(gridNum){
  let startCoordinates = [];  
  switch(gridNum){
    case 1:
      startCoordinates = [0,0];
      break;
    case 2:
      startCoordinates = [0,3];
      break;
    case 3:
      startCoordinates = [0,6];
      break;  
    case 4:
      startCoordinates = [3,0];
      break;
    case 5:
      startCoordinates = [3,3];
      break;
    case 6:
      startCoordinates = [3,6];
      break;
    case 7:
      startCoordinates = [6,0];
      break;
    case 8:
      startCoordinates = [6,3];
      break;
    case 9:
      startCoordinates = [6,6];
      break;
    default:
      console.log("Number should be between 1 and 9");
      break;
  }
  return startCoordinates;
}

// Function to set the coordinates for each square in a Sudoku puzzle
function createAllGrids(){
  let allGrids = [];
  let startCoordinates = [];
  let tempGrid = [];
  for(let i=1; i<=9; i++){
    startCoordinates = setInitialCoordinates(i);
    tempGrid = createGrid(startCoordinates[0], startCoordinates[1]);
    allGrids.push(tempGrid);
  }  
  return allGrids;
}

sudoku(puzzle);