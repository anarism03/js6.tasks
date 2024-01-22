/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function twoMaxElems(array) {
  let largestNumber = 0;
  let nextLargestNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      nextLargestNumber = largestNumber;
      largestNumber = array[i];
    } else if (array[i] > nextLargestNumber && array[i] !== largestNumber) {
      nextLargestNumber = array[i];
    }
  }
  return largestNumber + nextLargestNumber;
}

module.exports = twoMaxElems;
