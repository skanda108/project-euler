// Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const mult = () => {
  let result = 20;

  for (let i = 19; i > 1; i--) {
    if (result % i !== 0) {
      result += 20;
      i = 20;
      //console.log(i);
    }
  }
  return result;
};

console.log(mult()); // 232792560