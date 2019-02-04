const fs = require("fs");

const lines = fs.readFileSync("../input.txt", "utf8").split("\n");

function chunkString(str, size){
  const chunks = [];
  for (let i = 0; i < (str.length / size); i++) {
    chunks.push(str.substr(i*size,size));
  }
  return chunks;
}

function whoWon(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // console.log(board[i][j])
      if (isWinningSquare(board, i, j)) {
        console.log(i, j)
        console.log(board[i][j]);
        return false;
      }
    }
  }
  console.log("Tie");
}

function isWinningSquare(board, x, y) {
  const player = board[x][y];
  for (let i = -1; i <= 1; i ++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) { continue };
      if (!isValidSpot(board, x+i, y+j)) { continue };
      // console.log(x, y, player, i, j);
      if (board[x+i][y+j] === player) {
        // console.log("Smae");
         if (checkDir(board, x, y, i, j)) {
           return true;
         }
      }
    }
  }
  return false;
}

function checkDir(board, x, y, i, j) {
  const player = board[x][y];
  for (let n = 1; n < 3; n++) {
    const xi = x+(i*n);
    const yi = y+(j*n);
    if (!isValidSpot(board, xi, yi)) { return false }
    const spot = board[xi][yi];
    if (spot !== player) {
      return false;
    }
  }
  return true;
}



function isValidSpot(board, x, y) {
  const size = board.length;
  if (
    x < 0 ||
    y < 0 ||
    x === size ||
    y === size ||
    board[x][y] === "_"
  ) { return false };
  return true;
}

// for (const line of lines) {
  const line = lines[4];
  const length = line.charAt(0);
  const lineData = line.substring(2, line.length);
  const boardData = chunkString(lineData, length).map(line => line.split(""));
  console.log(line);
  whoWon(boardData);
// }