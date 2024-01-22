/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function swithcElems(array) {
  let minIndex=0;
  let maxIndex=0;
  for (let i = 0; i < array.length; i++) {
if (array[i]<array[minIndex]) {
  minIndex=i;
}else if (array[i]>array[maxIndex]) {
  maxIndex=i;
}  
  }
[array[maxIndex],array[minIndex]]=[array[minIndex],array[maxIndex]];
return array;
}
module.exports = swithcElems;
