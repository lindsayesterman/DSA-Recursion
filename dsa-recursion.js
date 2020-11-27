
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

console.log(sheep(3));


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
    return 1;
  }
  else {
    return console.log(n + nthTriangularNum(n - 1));
  }
}

nthTriangularNum(2);


function stringSplitter(stri, ch){
  if(str.indexOf(ch) == -1){
    return stri;
  } else {
    return stringSplitter(stri.substring(ch))
  }
}

stringSplitter("02/20/2020", "/");



function fibonacci(fNum){
  if (fNum == 1){
    return 1;
  }
  if (fNum == 2){
    return 2;
  }
  else {
    let f = (fNum - 2);
    let s = (fNum - 4);
    return console.log(f+s);
  }
}

fibonacci(3);

let ans = 1;
function factorial(number){
  if (number === 1){
    return 1;
  }
  let newNum = factorial(number - 1)
  ans *= newNum;
  return (ans)
}

factorial(5)


function mazeSolver(maze){
  
  let mazeX = maze.length;
  let mazeY = maze[0].length
  let solution = new Array(mazeX);
  for(i = 0; i < mazeX; i++){
    solution[i] = new Array(mazeY);
    for(j = 0; j < mazeY; j++){
      solution[i][j] = '-';
    }
  }
  return solveMaze(maze, 0, 0, solution);
}

function solveMaze(maze, x, y, sol, path = ''){
  if(x === maze.length - 1 && y === maze[0].length - 1){
    sol[x][y] = 1;
    console.log(path);
    console.log(sol);
    return path;
  } 
  
  if(isSafe(maze, x, y)){
    sol[x][y] = 1;
    
    if(solveMaze(maze, x + 1, y, sol, path + 'D')){
      return true;
    } else if(solveMaze(maze, x, y + 1, sol, path + 'R')){
      return true;
    } else if(solveMaze(maze, x - 1, y, sol, path + 'U')){
      return true;
    } else if(solveMaze(maze, x, y - 1, sol, path + 'L')){
      return true;
    } else  {
      sol[x][y] = 0;
      return false;
    } 
  } 
  
  return false
}

function isSafe(maze, x, y) {
  return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] !== '*') ? true : false
}


const listAnagram = function(string) {
  for(let i=0; i < string.length; i++){
      for(let letter=string[i]){
      }
  }
};


function binary(bin){
  if (bin === 0){
    return 0;
  }
  else {
    return (bin % 2 + 10 * binary((bin / 2)))
  }
}

binary(25)