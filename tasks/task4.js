/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function withoutRepetition(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (currentElement === result[j]) {
        isDuplicate = true;
        break;
      }
    }
if (!isDuplicate) {
  result.push(currentElement);
}
  }
  return result;
}
withoutRepetition([0, 1, -2, 1, 0, 0, 3])
module.exports = withoutRepetition;
