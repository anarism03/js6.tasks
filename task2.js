/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function firstOrLast(num) {

  let digits = String(num).split("");
  let firstDigit = parseInt(digits[0]);
  let lastDigit = parseInt(digits[digits.length - 1]);
  if (firstDigit > lastDigit) {
    return firstDigit;
  } else if (lastDigit > firstDigit) {
    return lastDigit;
  } else {
    return "Equal"
  }
}
firstOrLast(3453);
module.exports = firstOrLast;
