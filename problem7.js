// 10001st Prime
// By listing the first six prime numbers: 2,3,5,7,11,13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

// Trying Sieve of Eratosthenes

function getPrimes(max) {
  const sieve = [];
  const primes = [];
  for (let i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          primes.push(i);
          for (let j = i << 1; j <= max; j += i) {
              // console.log('i:', i);
              // console.log('j:', j);
              sieve[j] = true;
          }
      }
  }
  // console.log(primes[10000]);
  return primes[10000];
};

console.log(getPrimes(1000000)); // 104743

