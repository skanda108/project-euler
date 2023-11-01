// Creating the sieve of eratosthenes since finding prime numbers is important

const eratos = (num) => {
  const sieve = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!sieve.includes(i)) {
      primes.push(i);
      for (let j = i*2; j <= num; j+=i) {
        sieve.push(j);
      }
    }
  }
  return primes;
};

console.log(eratos(200));