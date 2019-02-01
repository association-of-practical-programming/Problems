const fs = require('fs');

// read the file
const file = fs.readFileSync('./input.txt');
const data = file.toString();
const lines = data.split('\n');

//loops through all of the lines and passes data split at " " to function
for(const line of lines){
    let data = line.split(" ");
    checkWinner(data);
}

function checkWinner(data) {
    let size = data[0];     //size of board from the split
    let boardData = data[1];    //board data
    let winner = "";
    let board = [size][size];
    let rows = boardData.split(size);

    console.log(rows);
    console.log(board);
}