function sudoku(puzzle) {
  let isInRow = findInRow(9, 4);
  console.log(isInRow);
  let isInColumn = findInColumn(2, 0);
  console.log(isInColumn);
};

let puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

let possibilities = {
  
};

function findInRow(num, row){
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

function findInColumn(num, column){
  let isInColumn = false;
  for(let i=0; i<9; i++){
    if(puzzle[i][column] == num){
      isInColumn = true;
      i = 9;
    }
  }
  return isInColumn;
}

function findInSquare(num, matrix){
  // TODO: add list of squares
  // TODO: find coordinates in square
  // TODO: look for number in square
}

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

createGrid(6, 6)


// sudoku(puzzle);