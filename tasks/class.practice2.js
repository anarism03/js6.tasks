// ededin polindrom olub olmadigini yoxla
//87584 NO
//789987 YES
function isPolindrom(num) {
  let start=""
  for ( let start = 0; start < num/2; start++) {
    parseInt(num / 10)
  }
  if (start!==num-1-start) {
    console.log("Its not isPolindrom");
  }else{
    console.log("it isPolindrom");
  }
}

isPolindrom(789987);
