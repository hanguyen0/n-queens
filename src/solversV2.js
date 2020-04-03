/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard,
//with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  let solutionsArray = [];
  //create a board
  let newBoard = new Board({ size: n })
  let counter = 0;

  newBoard.evalRow(n);

  //create a tree
  function evalRow(row) {
    //iterate through col in a row

    for (let i = 0; i < n; i++) {
      //place a piece
      newBoard.togglePiece([row][i]);//[0,0,0,0]
      //if conflict found, remove that piece
      if (newBoard.hasAnyRowConflicts() || newBoard.hasAnyColConflicts()) {
        newBoard.togglePiece(row, i)//removes it
      }

      // newBoard.togglePiece([row][i]);
    }
    //access new row
    newBoard.attribute[count]


    //pass in the next row
    evalRow(nextRow)//[0,0,0,0]
  }
  evalRow(newBoard)
  //
  //terminating a branch:
  //if no more posibilities
  //backtrack one step and try other possibilities
  //if placed n rooks, push into solutionArray
  //backtrack one step, reorganize possibilities
  //if no more posibilities
  //backtrack one step and try other possibilities
  //rules for placement:
  //left to right 0-n
  //check if valid move
  //if not valid, shift over by 1

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionsArray));
  return solutionsArray
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  // let solutionCount = 0; //fixme
  //make a output array which holds unique values = output array = []
  let outputArray = [];
  let findRookArray = findNRooksSolution(n)//array of all possible solutions
  for (let i = 0; i < findRookArray.length; i++) {
    let currentMatrix = JSON.stringify(findRookArray[i])//possible need to unpack array
    var is = outputArray.indexOf(currentMatrix);
    if (outputArray.includes(currentMatrix) === false) {
      outputArray.push(currentMatrix);
    }

  }
  //take a current value in a for loop, see if the output array holds it, if not push it in.

  //move on to the next objct in the input array- check and see if the output array holds it,

  //if it holds the value then continue, else/ push the new value into the output array

  //return outputArray.length = solutions count

  console.log('Number of solutions for ' + n + ' rooks:', outputArray.length);
  return outputArray.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


/*
[/////////////
{"0":[1,0,0,0],
"1":[0,1,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4},

/////////
{"0":[0,1,0,0],
"1":[1,0,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4},

///////
{0":[0,0,1,0],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,0,1],"n":4},

///////
{"0":[0,0,0,1],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,1,0],"n":4},





{"0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,0,0,1],
"3":[0,1,0,0],"n":4},


{"0":[0,0,0,0],
"1":[0,1,0,0],
"2":[1,0,0,0],
"3":[0,0,1,0],"n":4},

{"0":[0,0,0,0],
"1":[0,0,1,0],
"2":[1,0,0,0],
"3":[0,1,0,0],"n":4},

{"0":[0,0,0,0],
"1":[0,0,0,1],
"2":[1,0,0,0],
"3":[0,1,0,0],"n":4},

{"0":[0,0,0,0],
"1":[0,0,0,0],
"2":[1,0,0,0],
"3":[0,1,0,0],"n":4},

{"0":[0,0,0,0],
"1":[0,1,0,0],
"2":[0,0,1,0],
"3":[1,0,0,0],"n":4},

{"0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,0,1,0],
"3":[0,1,0,0],"n":4},



{"0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,0,0,0],
"3":[0,1,0,0],"n":4},

{0":[0,0,0,0],
"1":[0,1,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4},






{0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4},


{0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,0,1],"n":4},

{"0":[0,0,0,0],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,0,0],"n":4}]

/







*/