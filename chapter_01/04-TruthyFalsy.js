console.log("---------------------------------------");
console.log("🚀 ~ Truthy and Falsy ");
console.log("---------------------------------------");

function testTruthy(val) {
  return val
    ? console.log("🚀 ~ ", val, " is truthy")
    : console.log("🚀 ~ ", val, " is falsy");
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy("");
testTruthy("Packet");
testTruthy(new String(""));
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));
testTruthy({});
var obj = { name: "John" };
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);
