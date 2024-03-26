// quiz 01
const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// quiz 02
const a = true;
let type = '';
switch (typeof a) {
    case "number": {
        type += "숫자";
      break;
    }
    case "string": {
        type += "문자열";
      break;
    }
    case "boolean": {
        type += "불리언";
      break;
    }
    case "null": {
        type += "널";
      break;
    }
    case "undefined": {
        type += "언디파인";
      break;
    }
    case "object": {
        type += "객체";
      break;
    }
  }
console.log(type);

// quiz 03
let temperature = 10;
let str = '';
if (temperature < 0) {
    str += "매우 추움";
  } else if (temperature < 10) {
    str +="추움";
  } else if (temperature < 20) {
    str += "적당";
  } else {
    str +="더움";
  }
  console.log(str);