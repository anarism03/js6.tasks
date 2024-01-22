/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function findSum(num) {
  let summary=0;
  let term=0;
  for (let i = 0; i < num; i++) {
  term=term*10+2;
  summary+=term;
}
return summary;
}
console.log(findSum(3));;
module.exports = findSum;
