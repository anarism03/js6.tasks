/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function twoArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let isInArr2 = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        isInArr2 = true;
        break;
      }
    }
    if (!isInArr2) {
      result.push(arr1[i])
    }
  }
  return result;
}
module.exports = twoArrays;
