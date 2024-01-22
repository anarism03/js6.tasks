/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function primeNums(a, b) {
  let result = "";
  for (let i = a; i <= b; i++) {
    let sade = true;
    for (let j = 2; j < a; j++) {
      if (i % j == 0) {
        sade = false;
      }
    }
    if (sade) {
      result = result + i + " ";
    }
  }
  return result;
}
console.log(primeNums(25, 50));
module.exports = primeNums;
