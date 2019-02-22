const fs = require('fs');
const path = require('path');

const lines = fs.readFileSync(path.resolve(__dirname, "../input.txt"), "utf8").split("\n").map(line => line.split(" ").map(x => Number(x)));

for (const line of lines) {
  const result = isRelative(line);
  console.log(result);
}

function isRelative(numbers) {
  const allFactors = new Set();
  for (let n of numbers) {
    let i = 2;
    while (n > 1) {
      if (n % i === 0) {
        if (allFactors.has(i)) return i;
        allFactors.add(i);
      }
      while (n % i === 0) n = n / i;
      i++;
    }
  }
  return true;
}