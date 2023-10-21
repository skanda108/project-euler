// Largest Prime Factor
// The prime factors of 13195 are 5,7,13, and 29
// What is the largest prime factor of the number 600851475143?

const factorization = (n) => {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  // remove duplicates from factors array
  return factors.filter((item, index) => factors.indexOf(item) === index);
};

console.log(factorization(600851475143)); // [71, 839, 1471, 6857]