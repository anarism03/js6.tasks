/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function primarySequence(array) {
newArray=[];
for (let index = array.length-1; index >=0; index--) {
  let element = array[index];
  if (element!==undefined) {
    newArray.push(element)
  }
}
return newArray;
}
primarySequence([7,4,3,6,8,2]);
module.exports = primarySequence;
