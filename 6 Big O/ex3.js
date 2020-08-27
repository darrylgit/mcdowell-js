function printOrderedPairs(n) {
  // Create arr of range 1 to n
  const arr = inclusiveRange(1, n);

  const start = Date.now();

  // Print all possible pairs
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }

  const end = Date.now();

  const timeElapsed = end - start;
  return timeElapsed;
}

function inclusiveRange(i, j) {
  return new Array(j - i + 1).fill(0).map((_, idx) => idx + i);
}

const numbersToTest = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

console.log(
  numbersToTest
    .map(num => `Time elapsed when n = ${num}: ${printOrderedPairs(num)}\n`)
    .join('')
);

// Time elapsed when n = 100: 58
// Time elapsed when n = 200: 212
// Time elapsed when n = 300: 529
// Time elapsed when n = 400: 1143
// Time elapsed when n = 500: 1484
// Time elapsed when n = 600: 2421
// Time elapsed when n = 700: 2925
// Time elapsed when n = 800: 4124
// Time elapsed when n = 900: 4624
// Time elapsed when n = 1000: 6086

// The number of iterations isnthe sum of 1 to n
// Using Gauss's formula: O((n(n - 1)) / 2)
// Which simplifies to: O(n^2 / 2)
// Which simplifies to: O(N^2)
