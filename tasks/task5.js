/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function fibonacci(num) {
  let fib = "0 1";
  let a = 0;
  let b = 1;
  for (let i = 2; i < num; i++) {
    let next = a + b;
    fib+=" "+next;
    a=b;
    b=next;
  }
  return fib;
}
console.log(fibonacci(6));
module.exports = fibonacci;