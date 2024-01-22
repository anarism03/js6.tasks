/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function smallestFirst(array) {
  let minIndex = 0;
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  let temp = array[0];
  array[0] = array[minIndex];
  array[minIndex] = temp;
  return array;
}
smallestFirst([5,6,7,-5,6,8,3])
module.exports = smallestFirst;
