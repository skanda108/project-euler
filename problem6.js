// Sum Square Difference
// The sum of the squares of the first ten natural numbers is, 1^2+2^2+...+10^2 = 385
// The square of the sum of the first ten natural numbers is, (1+2+...+10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquare = () => {
  let total = 0;

  for (let i = 1; i < 101; i++) {
    total = total + (i ** 2);
  }

  return total;
};

// console.log(sumSquare());

const squareSum = () => {
  let total = 0;

  for (let i = 1; i < 101; i++) {
    total += i;
  }

  return total ** 2;
};

console.log(squareSum() - sumSquare()); // 25164150