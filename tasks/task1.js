/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test or npm run watch (non-stop checking test cases)
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function swapDigit(num) {
  let secondNumber=num%10;
  let firstNumber=parseInt(num/10);
  if (num>0 && num<99) {
    return secondNumber*10+firstNumber;
  }
}
console.log(swapDigit(67));
module.exports = swapDigit;
