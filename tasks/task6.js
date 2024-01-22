/* 
   1.npm install
   2 write very powerful code inside function
   3 npm test 
   4 push your code

   Do not change function names and modules.
   Write your code after the "return" keyword

   Happy hacking :)
*/

function interventionTheater(ticketCount, soldTickets) {
  let totalRevenue=0;
  for (let i = 0; i < ticketCount.length; i++) {
for (let j = 0; j < ticketCount[i].length; j++) {
if (soldTickets[i][j]===1) {
  totalRevenue+=ticketCount[i][j];
}  
}    
  }
  return totalRevenue;
}

module.exports = interventionTheater;
