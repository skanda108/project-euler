// Special Pythagorean Triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c , for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
// There exists exactly one Pythagorean triplet for which a + b + c = 1000
// Find the product abc

const triplet = () => {
  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      for (let c = b; c < 1000; c++) {
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
          if (a+b+c === 1000) {
            return a*b*c;
          }
        }
      }
    }
  }
};

console.log(triplet()); // 31875000