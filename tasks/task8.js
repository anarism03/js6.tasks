/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function lastGreat(array) {
  let maxIndex = array.length - 1
  let maxValue = array[maxIndex];
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > maxValue) {
      maxIndex = i;
      maxValue=array[i];
    }
  }
  let temp = array[array.length - 1];
  array[array.length-1]=array[maxIndex];
  array[maxIndex]=temp;
  console.log(array);
  return array;
}
lastGreat([6, -3, 7, -4, 7, 4, -5])
module.exports = lastGreat;
