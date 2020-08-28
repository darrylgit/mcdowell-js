function printOrderedPairs(arrALength, arrBLength) {
  const arrA = inclusiveRange(1, arrALength);
  const arrB = inclusiveRange(1, arrBLength);

  const start = Date.now();

  arrA.forEach(elementA => {
    arrB.forEach(elementB => {
      for (let k = 0; k < 10000; k++) {
        console.log(`${elementA}, ${elementB}`);
      }
    });
  });

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
    .map(
      num => `Time elapsed when n = ${num}: ${printOrderedPairs(num, num)}\n`
    )
    .join('')
);

// This code crashed Node.js

// At any rate, since k is constant, Big O is still O(ab)
