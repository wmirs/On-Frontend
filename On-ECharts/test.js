const nums = [1, 2, 3, 4, 5];
// [ 1, 4, 9, 16, 25 ]
nums.map((el, idx, arr) => el ** 2);
// [ 1, 4, 27, 64, 125 ]
nums.map(
  function (el, idx, arr) {
    if (idx <= 1) {
      return el ** 2;
    } else {
      return el ** this.exponent;
    }
  },
  { exponent: 3 }
);
