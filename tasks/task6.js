/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test or npm run watch (non-stop checking test cases)
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function cake(radius, width, length) {
  let diametr=2*radius;
  if (diametr>width && diametr>length) {
    return"YES"
  }else{
    return"NO"

  }
}

module.exports = cake;
