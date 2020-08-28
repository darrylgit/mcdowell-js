function isPrime(num) {
  start = Date.now();

  let primeFlag = true;
  for (let x = 2; x * x < num; x++) {
    if (num % x === 0) {
      primeFlag = false;
    }
  }

  console.log(`${num} is prime: ${primeFlag}`);

  const end = Date.now();

  const timeElapsed = end - start;
  return timeElapsed;
}

const numbersToTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  num => num * 10000000000000
);

console.log(
  numbersToTest
    .map(num => `Time elapsed when n = ${num}: ${isPrime(num)}\n`)
    .join('')
);

// Time elapsed when n = 10000000000000: 36
// Time elapsed when n = 20000000000000: 49
// Time elapsed when n = 30000000000000: 54
// Time elapsed when n = 40000000000000: 59
// Time elapsed when n = 50000000000000: 66
// Time elapsed when n = 60000000000000: 72
// Time elapsed when n = 70000000000000: 78
// Time elapsed when n = 80000000000000: 83
// Time elapsed when n = 90000000000000: 88
// Time elapsed when n = 100000000000000: 92

// O(√n)
