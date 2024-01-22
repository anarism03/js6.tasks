// /* 
//    1.npm install
//    2 write very powerful code inside function
//    3 npm test 
//    4 push your code

//    Do not change function names and modules.
//    Write your code after the "return" keyword

//    Happy hacking :)
// */

function sleepingCars(str) {
  let result = [];
  let count = 0;
  let max=0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'k') {
      count++;
    } else {
      result.push(count);
      count = 0;
    }
  }
  for (let i = 0; i < result.length; i++) {
    let element = result[i];
    if (element>max) {
      max=element
    }
  }
return max;
}
sleepingCars('kpkpkpkkkkpkkkkkkkk');
module.exports = sleepingCars;

