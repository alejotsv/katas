// Instructions:
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

// Throw       Score
// ---------   ------------------
// 5 1 3 4 1   50 + 2 * 100 = 250
// 1 1 1 3 1   1000 + 100 = 1100
// 2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {

  let result = 0;
  let newArr = [];
  for (let i=1; i<=6; i++){
    newArr.push(dice.filter((num) => num === i))
  }

  console.log(newArr);

  switch (newArr[0].length){
    case 0:
    break;

    case 1:
    result += 100;
    break;

    case 2:
    result += 200;
    break;

    case 3:
    result += 1000;
    break;

    case 4:
    result += 1100;
    break;

    case 5:
    result += 1200;
    break;
  }

  switch (newArr[4].length){
    case 0:
    break;

    case 1:
    result += 50;
    break;

    case 2:
    result += 100;
    break;

    case 4:
    result += 50;
    break;

    case 5:
    result += 100;
    break;
  }


  let score = 600;
  for (let i=5; i>0; i--){
    if (newArr[i].length >= 3){
      result += score;
    }
    score -= 100;
  }


return result;

  
  
}

let arr = [2,1,4,4,4];

score(arr);