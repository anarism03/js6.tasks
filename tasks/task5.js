/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function switchNeighbors(array) {
  for (let i = 0; i < array.length-1; i+=2) {
    let element = array[i];
    array[i]=array[i+1];
    array[i+1]=element;
  }
  console.log(array);
  return array;
}
switchNeighbors([8,-1,4,6,14]);
module.exports = switchNeighbors;
