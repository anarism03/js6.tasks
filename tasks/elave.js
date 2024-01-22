//1. Baslangic ve son deyeri verilmis intervalin daxilinde ededleri 3 pille artma ile cap edin
// Example:
// Input: start = 25 end = 54
// Output:
// 25
// 28
// 31
// 34
// 37
// 40
// 43
// 46
// 49
// 52
function increaseNumber(a, b) {

  let end = b;
  for (let start = a; start < end; start += 3) {
    console.log(start);
  }
}
increaseNumber(25, 54);

//////////////////////////////////////////////////////////////////////////////



function printIntervalStep(start, end) {

  for (let result=start; result < end; result++) {
    if (result % 5 === 0) {
      
      console.log(result);
    }
  }
}
console.log(printIntervalStep(12, 48));

//2. Baslangic ve son deyeri verilmis intervalin daxilinde olan 5-e qaliqsiz bolunenleri ededleri cap edin
// Example:
// Input: start = 12 end = 48
// Output:
// 15
// 30
// 45

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



function printInterval(num) {

  for (let start = 1; start < num; start++) {
    if (start % 2 === 0 && start % 3 === 0) {
      console.log(start);
    }

  }
}
printInterval(65)
//3. Verilmis edede qeder olan ededlerin icerisinde necesi 6-ya bolunendir. (hem 2-ye hem de 3-e qaliqsiz bolunen ededler 6-ya bolunur)
// Example:
// Input: num = 65
// Output:
// 6
// 12
// 18
// 24
// 30
// 36
// 42
// 48
// 54
// 60

//////////////////////////////////////////////////////////////////////

function findHowManyExist(num) {
}

//4. Verilmis 2 ededden hansinin boleni coxdursa hemen ededi return edin
// Example:
// Input: start = 54 end = 77
// Output: 54

function findWhichHasMore(a, b) {
  let divisionA = 0;
  let divisionB = 0;
  for (let index = 1; index <= a; index++) {
    if (a % index === 0) {
      divisionA++;
    }
  }
  for (let index2 = 1; index2 <= b; index2++) {
    if (b % index2 === 0) {
      divisionB++;
    }
  }
  if (divisionA > divisionB) {
    return a;
  } else{
    return b;
  }
}
findWhichHasMore(45, 67);





//5. Verilmis ededin ortadan 2 qrupa ayirmaq lazimdir eger ayirmaq olmursa "impossible" cap edin
// Example1:
// Input: num = 72634821;
// Output: 7263-4821

// Example2:
// Input: num = 57123;
// Output: "impossible"

function breakNumber(num) {
  let count = o;
  for (let index = num; index > 0; index = parseInt(index / 10)) {
    count++;
  }
  if (count%2!==0) {
    return"Impossible"
  }
let breaker=10**count/2;

let lastPart=num%breaker;
let firstPart=parseInt(num/breaker);


}










//6. Verilmis ededin 3cu yerde duran reqemlerini cap edin.
// Example:
// Input: num = 98723496234;
// Output: 7 4 2

function printSearchedIndex(num) {
let helper=``
let counter=0;
let lastNumber=0;
let reverseNumber=''
for(let number=num; number>0; number=parseInt(number/10)){
  reverseNumber=reverseNumber+(number%10);
}
for(let number=reverseNumber; number>0; number=parseInt(number/10)){
  let lastNumber=number%10;
  counter+=1;
  if (counter===3) {
    counter=0;
    helper=`${lastNumber} `+helper;
  }
}
}

