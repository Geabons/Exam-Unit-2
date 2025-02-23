import test from "./Tests.mjs";

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

function rootNumber(num) {
  if (num == NaN) {
    return NaN;
  }
  for (let i = num; i >= 1; i--) {
    if (i * i === num) {
      num = i;
      break;
    }
  }
  return num;
}

function cubeOfNumber(num) {
  if (num == NaN) {
    return NaN;
  }
  return num * num * num;
}

function areaGivenRadius(r) {
  if (r == NaN) {
    return NaN;
  }
  return r * 3.14;
}

function greeting(name) {
  return "Hello, how are you doing " + name + " ?"
}

const squareTests = test("Returning square number Tester");
const inchesTests = test("converting inches to millimeters Tester");
const rootTests = test("Returning root of square number Tester");
const cubeTests = test("Returning cube of number Tester");
const areaTests = test("Returning area of radius Tester");
const greetingTests = test("saying hi to name");

squareTests.isEqual(returnSquareNumber(4), 16, "square of 4 is 16");
squareTests.isNotANumber(
  returnSquareNumber("string"),
  NaN,
  "square of string is NaN"
);
inchesTests.isEqual(
  inchesToMillimeter(2),
  50.8,
  "2 inches is 50.8 millimeters"
);
inchesTests.isNotANumber(
  inchesToMillimeter("string"),
  NaN,
  "string inches is NaN millimeters"
);
rootTests.isEqual(rootNumber(4), 2, "the root of 4 is 2");
rootTests.isNotANumber(rootNumber("string"), NaN, "the root of string is NaN");
cubeTests.isEqual(cubeOfNumber(4), 64, "4 cubed is 64");
cubeTests.isNotANumber(cubeOfNumber("string"), NaN, "string cubed is NaN");
areaTests.isEqual(
  areaGivenRadius(4),
  12.56,
  "the area of a circle with radius 4 is 12.56"
);
areaTests.isNotANumber(
  areaGivenRadius("string"),
  NaN,
  "the area of a circle with radius string is NaN"
);
greetingTests.isEqual(
  greeting("Levi"),
  "Hello, how are you doing Levi ?",
  "expected result: Hello, how are you doing Levi ?"
);
greetingTests.isEqual(
    greeting(1),
    "Hello, how are you doing 1 ?",
    "expected result: Hello, how are you doing 1 ?"
  );