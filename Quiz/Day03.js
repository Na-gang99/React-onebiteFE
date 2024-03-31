// quiz 01 모든 약수찾기
let num = 100;

for (let i = 1; i <= num ; i++) {
  if(num % i === 0){console.log(i);}
}

// quiz 02 소수 판별기 (에라토스테네스의 체)
function isPrimeNumber(num) {
  let token = true;
  for(let i = 2 ; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      token = false;
    }
  }
  return token;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// quiz 03 계산기 만들기
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1,num2));
}

calculate(5, 3, add);