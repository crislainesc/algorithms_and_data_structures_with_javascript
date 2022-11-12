console.log("---------------------------------------");
console.log("🚀 ~ Variables");
console.log("---------------------------------------");

var num = 1;
console.log("🚀 ~ num", num);

num = 3;
console.log("🚀 ~ num", num);

var price = 1.5;
console.log("🚀 ~ price", price);

var myName = "Packet";
console.log("🚀 ~ myName", myName);

var trueValue = true;
console.log("🚀 ~ trueValue", trueValue);

var nullVar = null;
console.log("🚀 ~ nullVar", nullVar);

var und;
console.log("🚀 ~ und", und);

console.log("---------------------------------------");
console.log("🚀 ~ Scope of Variables");
console.log("---------------------------------------");

var myVariable = "global";
console.log("🚀 ~ myVariable", myVariable);

myOtherVariable = "global";
console.log("🚀 ~ myOtherVariable", myOtherVariable);

function myFunction() {
  var myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log("🚀 ~ myVariable", myVariable);
console.log("🚀 ~ myFunction", myFunction());
console.log("🚀 ~ myOtherVariable", myOtherVariable);
console.log("🚀 ~ myOtherFunction", myOtherFunction());
console.log("🚀 ~ myOtherVariable", myOtherVariable);
