/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function factorial(num) {
  let result=1;
  for (let i = 1; i <= num; i++) {
result*=i;
 }
 return result;
}
factorial(6);
module.exports = factorial;
