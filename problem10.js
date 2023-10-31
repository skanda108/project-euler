// Summation of Primes
// The sum of primes below 10 is 2 + 3 + 5 + 7 = 17
// Find the sum of all the primes below two million.

const summation = (max) => {
  const sieve = [];
  const primes = [];
  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
        for (let j = i*2; j <= max; j += i) {
          sieve[j] = true;
      }
    }
  }
  return primes.reduce((acc, curr) => acc + curr, 0);
};

console.log(summation(2000000)); // 142913828922

