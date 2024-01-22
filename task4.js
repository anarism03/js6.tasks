/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function operationsCount(str) {
  let counter = 0;
  for (let i = 1; i < str.length; i++) {
    let element = str[i];
    if (element === '+' || element === '-' || element === '*') {
      counter++;
    }
  }
  return counter;
}
operationsCount('3+7*4-6/n:3*4');
module.exports = operationsCount;

