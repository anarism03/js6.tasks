/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function greatThanPrev(array) {
  let result=[];
  for (let i = 1; i < array.length; i++) {
    if (array[i]>array[i-1]) {
      result.push(array[i]);
    }
  }
  console.log(result);
  return result;
}
greatThanPrev([14,16,18,34,64,43,44]);
module.exports = greatThanPrev;
