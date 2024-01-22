//verilmis ededin tek reqemlerini 1 vahid artirmaq cut reqemlerini 1 vahid azalt
let num = 76234356;  //85143465
let result=""
for (let num2 = num; num2 > 0; num2 = parseInt(num2 / 10)) {
  let b=num2%10;
  if (b % 2 === 0) {
    b--;
  } else {
    b++;
  }
  let result=b+""
  console.log(result);
}

