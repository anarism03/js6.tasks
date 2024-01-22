/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/
function wordCounts(str) {
  let newArr = str.split(" ");
  return newArr.length;
}
wordCounts("Hello world!");
module.exports = wordCounts;