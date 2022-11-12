console.log("---------------------------------------");
console.log("🚀 ~ Conditional Statements");
console.log("---------------------------------------");

var num = 1;
if (num === 1) {
  console.log("🚀 ~ num is equal to 1");
}

var num = 0;
if (num === 1) {
  console.log("🚀 ~ num is equal to 1");
} else {
  console.log("🚀 ~ num is not equal to 1, the value of num is " + num);
}

if (num === 1) {
  num--;
} else {
  num++;
}

console.log("Ternary Operator");
num === 1 ? num-- : num++;

var month = 5;
if (month === 1) {
  console.log("🚀 ~ January");
} else if (month === 2) {
  console.log("🚀 ~ February");
} else if (month === 3) {
  console.log("🚀 ~ March");
} else {
  console.log("🚀 ~ Month is not January, February or March");
}

var month = 5;
switch (month) {
  case month === 1:
    console.log("🚀 ~ January");
    break;
  case month === 2:
    console.log("🚀 ~ February");
    break;
  case month === 3:
    console.log("🚀 ~ March");
    break;
  default:
    console.log("🚀 ~ Month is not January, February or March");
}
