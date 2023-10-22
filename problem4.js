// Largest Palindrome Product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2- digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const pal = (n) => {
  let str = n.toString();
  let arr = str.split('');

  if (str === arr.reverse('').join('')) {
    return true;
  }

  return false;
};

// console.log(pal(91 * 99));

const prod = () => {
  let result = 101;

  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let product = i * j;
      if (pal(product) === true && (product > result)) {
        result = product;
      }
    }
  }
  return result;
}

console.log(prod()); // 906609