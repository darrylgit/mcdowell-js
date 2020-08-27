function sumAndProduct(arr) {
  const start = Date.now();
  let sum = 0;
  let product = 1;

  arr.forEach(element => {
    sum += element;
  });

  arr.forEach(element => {
    product *= element;
  });

  const end = Date.now();
  console.log(`Sum: ${sum}, Product: ${product}`);
  console.log(`Time elapsed: ${end - start}`);
}

const arr0 = Array(10 ** 6).fill(2);
sumAndProduct(arr0); // Time elapsed: 31

const arr1 = Array(10 ** 7).fill(2);
sumAndProduct(arr1); // Time elapsed: 298

const arr2 = Array(10 ** 7 * 5).fill(2);
sumAndProduct(arr2); // Time elapsed: 2489

// 10 ** 8 crashes node.js

// Efficiency: O(N), super apparent when comparing arr0 and arr1 runtimes
