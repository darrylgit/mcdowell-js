function printPairs(n) {
  // Create arr of range 1 to n
  const arr = inclusiveRange(1, n);

  const start = Date.now();

  // Print all possible pairs
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }

  const end = Date.now();

  console.log(`Time elapsed: ${end - start}`);
}

function inclusiveRange(i, j) {
  return new Array(j - i + 1).fill(0).map((_, idx) => idx + i);
}

printPairs(10); // Time elapsed: 6
printPairs(100); // Time elapsed: 100
printPairs(200); // Time elapsed: 560
printPairs(300); // Time elapsed: 1197
printPairs(400); // Time elapsed: 2096
printPairs(500); // Time elapsed: 3275
printPairs(600); // Time elapsed: 5054
printPairs(700); // Time elapsed: 6481
printPairs(800); // Time elapsed: 8504
printPairs(900); // Time elapsed: 11199
printPairs(1000); // Time elapsed: 14257

// O(N^2)
