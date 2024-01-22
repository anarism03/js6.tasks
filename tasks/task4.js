/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test or npm run watch (non-stop checking test cases)
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function oneOdd(num) {
  let first=parseInt(num/1000);
  let second=parseInt(num/100);
  let third=parseInt(num/10);
  let fourth=num%10;
if (first%2!==0 || second%2!==0 || third%2!==0 || fourth%2!==0) {
  return"YES"
}else{
  return"NO"
}

}
module.exports = oneOdd;
