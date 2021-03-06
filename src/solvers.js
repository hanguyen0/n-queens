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
  let solution = n; //fixme//idea is to place as many rooks as possible on n, n board
  let solutionsArray = [];

  //creating a new board in matrix is done like so= var board = new Board(n)

  //var board = new Board(n);- 4 === 4x4 - 4 rooks , 5 === 5x5 place- 5 rooks ,
  for (let f = 0; f < n; f++) {
    for (let e = 0; e < n; e++) {
      let newBoard = new Board({ n: solution })//f, 0
      newBoard.togglePiece(0, e);//first piece//0, e

      //placing pieces on the same board is done by commands board.togglePiece(r,c); unplacing is calling the same piece
      //iterate over row
      for (let z = 0; z < n; z++) {//
        //column
        for (let i = 0; i < n; i++) {
          //this is checking the square in the next row-
          //*TODO- Check if the current space is occupied if so - continue;
          if(newBoard.attributes[z][i] !== 0){//means that we already have a piece placed here
            continue;
          }
          newBoard.togglePiece(z, i)//second piece
          if (newBoard.hasAnyRowConflicts()) {
            newBoard.togglePiece(z, i)//removes it
          }
          if (newBoard.hasAnyColConflicts()) {
            newBoard.togglePiece(z, i)//removes it
          }
          if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()) {
            continue;
          }
        }

      }
      solutionsArray.push(newBoard);
    }
  }
  //left to right , top left to right
  //rule is pieces stay in rows
  //next must be in next row, but not same row or column as previous piece

  //Base case- end of the board- all pieces placed- no more space- failure case pieces on board <n
  //base case- return solution pieces on board == n
  //for certain board- small boards there may not be solutions so that is a base case too

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionsArray));
  //Single solution for 4 rooks: {"0":[1,0,0,0],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4}
  // solutionsArray.push(newBoard);
  //return newBoard;
  return solutionsArray//
  // Single solution for 4 rooks:
  /*[{"0":[1,0,0,0],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4},
  {"0":[0,1,0,0],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4},
  {"0":[0,0,1,0],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4},
  {"0":[0,0,0,1],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4}]*/
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

/////////
"{:[1,0,0,0],
"1":[0,1,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4}"

0": [0,1,0,0],
"1":[1,0,0,0],
"2":[0,0,1,0],
"3":[0,0,0,1],"n":4}"

2:  [0,0,1,0],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,0,1],"n":4}"

 0":[0,0,0,1],
"1":[1,0,0,0],
"2":[0,1,0,0],
"3":[0,0,1,0],"n":4}"


////missing
"{:[0,0,0,1],
"1":[0,0,1,0],
"2":[0,1,0,0],
"3":[1,0,0,0],"n":4}"


//Other possible solutions
"{: [0,0,0,1],
"1":[0,0,1,0],
"2":[0,1,0,0],
"3":[1,0,0,0],"n":4}"

"{: [0,1,0,0],
"1":[0,0,0,1],
"2":[0,0,1,0],
"3":[1,0,0,0],"n":4}"

"{: [0,0,1,0],
"1":[1,0,0,0],
"2":[0,0,0,1],
"3":[0,1,0,0],"n":4}"

*/