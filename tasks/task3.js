/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test or npm run watch (non-stop checking test cases)
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function rowDigit(num) {
  let first = parseInt(num / 1000)%10;
  let second = parseInt(num / 100)%10;
  let third = parseInt(num / 10) % 10;
  let fourth = num % 10;
  if (first === 3 && second === 7) {
    return "YES"
  } else if (second === 3 && third === 7) {
    return "YES"
  } else if (third === 3 && fourth === 7) {
    return "YES"
  } else {
    return "NO"
  }
}
console.log(rowDigit(3337));
module.exports = rowDigit;
