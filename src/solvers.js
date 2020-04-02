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
  for (var e = 0; e < n; e++) {
    let newBoard = new Board({ n: solution })
    newBoard.togglePiece(0, e);
    //placing pieces on the same board is done by commands board.togglePiece(r,c); unplacing is calling the same piece
    //iterate over row
    for (let z = 1; z < n; z++) {
      //column
      for (let i = z; i < n; i++) {
        newBoard.togglePiece(z, i)
        if (newBoard.hasAnyRowConflicts()) {
          newBoard.togglePiece(z, i)
        }
      }

    }
    solutionsArray.push(newBoard);
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
  return solutionsArray
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
