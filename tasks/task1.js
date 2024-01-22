/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/
function largerThanAverage(array) {
  let sumArr = 0;
  let sumAboveAvarage = 0
  let count = 0;
  let average;
  for (let i = 0; i < array.length; i++) {
    sumArr += array[i];
  }
  average = sumArr / array.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > average) {
      sumAboveAvarage += array[i]
      count++;
    }
  }
  // console.log([sum, countAboveAverage]);
  return [sumAboveAvarage, count]
}

largerThanAverage([4, 3, 5, 4, 8, 12, 1]);
module.exports = largerThanAverage;
