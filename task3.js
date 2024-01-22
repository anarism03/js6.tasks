/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function marks(num) {
  let countTwo = 0;
  let countFive = 0;
  let digits = String(num).split('');
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '2') {
      countTwo++;
    } else{
      countFive++;
    }
  }
  if (countTwo > countFive) {
    return 2;
  } else if (countFive > countTwo) {
    return 5;
  } else {
    return 'Equal';
  }
}
marks(25552222);
module.exports = marks;
