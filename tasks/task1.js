/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/
function diffElems(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element)
    } 
  }
let lengthOfUniqueArray=uniqueArray.length
  return lengthOfUniqueArray;
}
module.exports = diffElems;

