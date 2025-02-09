// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

var reverse = function (x) {
  let isLessThenZero = false;

  if (x < 0) {
    isLessThenZero = true;
    x = -1 * x;
  }

  let string = x + '';
  let array = string.split('');
  let start = 0;
  let end = array.length - 1;

  // 2147483647

  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  x = +array.join('');

  if (isLessThenZero) {
    x = -1 * x;
  }

  if (x > 2 ** 31 - 1 || x < -1 * 2 ** 31) {
    return 0;
  }

  return x;
};

// var reverse = function (x) {
//   let array = Math.abs(x).toString().split('');
//   let start = 0, end = array.length - 1;

//   while (start < end) {
//     [array[start], array[end]] = [array[end], array[start]];
//     start++;
//     end--;
//   }

//   let reversed = Number(array.join('')) * Math.sign(x);
//   return reversed >= -(2 ** 31) && reversed <= 2 ** 31 - 1 ? reversed : 0;
// };
