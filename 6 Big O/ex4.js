function printUnorderedPairs(arrALength, arrBLength) {
  const arrA = inclusiveRange(1, arrALength);
  const arrB = inclusiveRange(1, arrBLength);

  const start = Date.now();

  arrA.forEach(elementA => {
    arrB.forEach(elementB => {
      if (elementA < elementB) {
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
      num => `Time elapsed when n = ${num}: ${printUnorderedPairs(num, num)}\n`
    )
    .join('')
);

// Time elapsed when n = 100: 84
// Time elapsed when n = 200: 217
// Time elapsed when n = 300: 363
// Time elapsed when n = 400: 528
// Time elapsed when n = 500: 893
// Time elapsed when n = 600: 1212
// Time elapsed when n = 700: 1678
// Time elapsed when n = 800: 2321
// Time elapsed when n = 900: 3020
// Time elapsed when n = 1000: 3607

// Looks like O(N^2), but it's not since arrA and arrB can be two different sizes.
// Therefore, O(ab)
