/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function maxElemArr(array) {
  let largestNumber=[0];
  let maxIndex=1;
  for (let i = 1; i < array.length; i++) {
    if (array[i]>largestNumber) {
      largestNumber=array[i];
      maxIndex=i+1;
    }
  }
  return [largestNumber, maxIndex];
}
module.exports = maxElemArr;
