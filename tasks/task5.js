/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function arrayDiaqonals(array) {
let firstDiagSum=0;
let secondDiagSum=0;
for (let i = 0; i < array.length; i++) {
firstDiagSum+=array[i][i];
secondDiagSum+=array[i][array.length-1-i];
}
console.log([firstDiagSum,secondDiagSum]);
  return [firstDiagSum,secondDiagSum];
}
arrayDiaqonals([
  [134, 475, 30, 424],
  [303, 151, 419, 235],
  [248, 166, 90, 42],
  [318, 237, 184, 36]
])
module.exports = arrayDiaqonals;
