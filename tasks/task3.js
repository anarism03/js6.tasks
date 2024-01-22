/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function evenIndexes(array) {
  let result=[];
  for (let i = 0; i < array.length; i+=2) {
result.push(array[i]);  
  }
  console.log(result);
  return result;
}
evenIndexes([12,45,64,21,642,64]);
module.exports = evenIndexes;
