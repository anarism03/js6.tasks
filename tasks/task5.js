/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test or npm run watch (non-stop checking test cases)
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function identicalDigits(num) {
  let first = parseInt(num / 1000) % 10;
  let second = parseInt(num / 100) % 10;
  let third = parseInt(num / 10) % 10;
  let fourth = num % 10;
  if (`${first}${second}` === `${third}${fourth}`) {
    return "YES"
  } else if (first===second && third===fourth) {
    return "YES"
  } else {
    return "NO"
  }
}
console.log(identicalDigits(4343));
module.exports = identicalDigits;
