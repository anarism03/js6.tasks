/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function largerThanNeighbors(array) {
  let counter=0;
  for (let i = 1; i < array.length-1; i++) {
    const element = array[i];
    if (element>array[i+1] && element>array[i-1]) {
      counter++
    }
  }
  console.log(counter);
return counter;
}
largerThanNeighbors([9,5,-7,-7,5,-9,-4])
module.exports = largerThanNeighbors;
