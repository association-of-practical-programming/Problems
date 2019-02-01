const fs = require('fs');

// read the file
const file = fs.readFileSync('./input.txt');
const data = file.toString();
const lines = data.split('\n');

//loops through all of the lines
for(const line of lines){
    let size = line.charAt(0);
    console.log(size);

    checkWinner(size, data);
}

function checkWinner(size, data) {
    let winner = "";

    console.log(winner);
}