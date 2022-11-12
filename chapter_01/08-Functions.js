console.log("---------------------------------------");
console.log("🚀 ~ Functions");
console.log("---------------------------------------");

function sayHello() {
  console.log("🚀 ~ Hello!");
}

sayHello();

function output(text) {
  console.log("🚀 ~ output ~ text", text);
}

output("Hello!");
output("Hello!", "Other text");

function sum(num1, num2) {
  return num1 + num2;
}

var result = sum(1, 2);
console.log("🚀 ~ result", result);
