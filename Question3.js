var num = 5;
var string = "";
for (var i = 1; i <= num; i++) {

  for (var j = 1; j <= num - i; j++) {
    string += " ";
  }
  
  for (var k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === num) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);