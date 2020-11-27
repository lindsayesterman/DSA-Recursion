//#1

const sheep = function (num) {
  // Base case
  if (num === 0) {
    return console.log("All sheep jumped over the fence");
  }
  // General case
  else {
    console.log(num + ": Another sheep jumps over the fence");
    sheep(num - 1);
  }
};

let num = 3;
console.log(sheep(num));

//2

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return console.log("exponent should be >= 0");
  }
  else if (exponent === 0) {
    return 1;
  }
  else {
    return console.log(Math.pow(base, exponent));
    powerCalculator(base, exponent - 1);
  }
}

powerCalculator(10, 2);


function reverseString(str){
    if (str.length <= 0) {
        return;
    }
    else {
        let letter = str.substring(str.length-1)
        console.log(letter)
        reverseString(str.substring(0, str.length-1))
    }
}

let str = "lindsay"
reverseString(str)


function nthTriangularNum(n){
    if (n <= 1){
        return console.log(1);
    }
    else {
      return console.log(n + nthTriangularNum(n - 1));
    }
}

nthTriangularNum(2);