/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function countOfDiffElems(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
   if (!result.includes(array[i])) {
    result.push(array[i])
   }
  }
  return result.length;
}
module.exports = countOfDiffElems;

