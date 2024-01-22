/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function arrayElems(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        element *= arr[j];
      }
    }
  result.push(element);
  }
  console.log(result);
  return result;
}
arrayElems([1,2,3,4])
module.exports = arrayElems;
