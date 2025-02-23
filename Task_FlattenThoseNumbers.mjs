function returnSquareNumber(num) {
  if (num == NaN) {
    return NaN;
  }
  return num * num;
}

function inchesToMillimeter(inches) {
  if (inches == NaN) {
    return NaN;
  }
  return inches * 25.4;
}

function rootNumber(number) {
  for (let i = number; i >= 1; i--) {
    if (i * i === number) {
      number = i;
      break;
    }
  }
  return number;
}

function cubeOfNumber(num) {
  return num * num * num;
}

function areaGivenRadius(r) {
  return r * 3.14;
}

function greeting(name) {
  console.log("hello, how are you doing " + name + " ?");
}
