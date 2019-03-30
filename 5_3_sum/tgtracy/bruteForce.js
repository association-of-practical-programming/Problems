// Run: `node bruteForce.js`
// Redirect output to file: `node solution.js > output.file`
// Check if correct: `diff output.file ../output.txt`

const fs = require('fs');
const path = require('path');

fs.readFileSync(path.resolve(__dirname, "../input.txt"), "utf8").
split("\n").
map(line => line.split(" ")).
map(line => ThreeSum(Number(line[0]), line.slice(1).map(n => Number(n))))

function ThreeSum(a, n) {
  for (let i = 0; i < n.length - 2; i++) {
    for (let j = i + 1; j < n.length - 1; j++) {
      for (let k = j + 1; k < n.length; k++) {
        if (n[i] + n[j] + n[k] === a) {
          const res = [n[i], n[j], n[k]].sort((a, b) => a - b).join(" ");
          console.log(res);
          return;
        }
      }
    }
  }
  console.log(false);
}