function reverse(length) {
  let arr = inclusiveRange(1, length);

  const start = Date.now();

  for (let i = 0; i < arr.length / 2; i++) {
    const other = arr.length - i - 1;
    const temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
  console.log(arr[0]);

  const end = Date.now();

  const timeElapsed = end - start;
  return timeElapsed;
}

function inclusiveRange(i, j) {
  return new Array(j - i + 1).fill(0).map((_, idx) => idx + i);
}

const numbersToTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => num * 1000000);

console.log(
  numbersToTest
    .map(num => `Time elapsed when n = ${num}: ${reverse(num)}\n`)
    .join('')
);

// Time elapsed when n = 1000000: 6
// Time elapsed when n = 2000000: 4
// Time elapsed when n = 3000000: 2
// Time elapsed when n = 4000000: 2
// Time elapsed when n = 5000000: 3
// Time elapsed when n = 6000000: 4
// Time elapsed when n = 7000000: 4
// Time elapsed when n = 8000000: 5
// Time elapsed when n = 9000000: 6
// Time elapsed when n = 10000000: 7

// O(N)
