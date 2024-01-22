/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

  function reverseNum(num) {
    let reverse =" "
    for (let i = num; i > 0; i = parseInt(i / 10)) {
      let lastNum = i % 10;
      reverse = reverse + "" + lastNum;
    }
    console.log(reverse);
    return reverse;
  }
  reverseNum(6412874128);
module.exports = reverseNum;
