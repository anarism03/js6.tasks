/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function exceptGreatAndSmall(array) {
  let smallest = Infinity;
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== smallest && array[i] !== largest) {
      sum += array[i];
    }
  }
return sum
}
exceptGreatAndSmall([7,5,4,3,3,1,1])
module.exports = exceptGreatAndSmall;
