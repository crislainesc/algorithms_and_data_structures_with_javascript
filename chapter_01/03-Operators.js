console.log("---------------------------------------");
console.log("🚀 ~ Operators");
console.log("---------------------------------------");

console.log("Arithmetic");
var num = 0;
console.log("🚀 ~ num", num);

num = num + 2;
console.log("🚀 ~ num", num);

num = num * 3;
console.log("🚀 ~ num", num);

num = num / 2;
console.log("🚀 ~ num", num);

console.log("Assignment");
num++;
console.log("🚀 ~ num", num);

num--;
console.log("🚀 ~ num", num);

num += 1;
console.log("🚀 ~ num", num);

num -= 2;
console.log("🚀 ~ num", num);

num *= 3;
console.log("🚀 ~ num", num);

num /= 2;
console.log("🚀 ~ num", num);

num %= 3;
console.log("🚀 ~ num", num);

console.log("Comparative");
console.log("🚀 ~ num == 1 : " + (num == 1));
console.log("🚀 ~ num === 1 : " + (num === 1));
console.log("🚀 ~ num != 1 : " + (num != 1));
console.log("🚀 ~ num > 1 : " + (num > 1));
console.log("🚀 ~ num < 1 : " + (num < 1));
console.log("🚀 ~ num >= 1 : " + (num >= 1));
console.log("🚀 ~ num <= 1 : " + (num <= 1));

console.log("Logical");
console.log("🚀 ~ true && false : " + (true && false));
console.log("🚀 ~ true || false : " + (true || false));
console.log("🚀 ~ !true : " + !true);
console.log("🚀 ~ !false : " + !false);

console.log("Bitwise");
console.log("🚀 ~ 5 & 1 : " + (5 & 1));
console.log("🚀 ~ 5 | 1 : " + (5 | 1));
console.log("🚀 ~ ~5 : " + ~5);
console.log("🚀 ~ 5 ^ 1 : " + (5 ^ 1));
console.log("🚀 ~ 5 << 1 : " + (5 << 1));
console.log("🚀 ~ 5 >> 1 : " + (5 >> 1));

console.log("Typeof");
console.log("🚀 ~ typeof num : " + typeof num);
console.log("🚀 ~ typeof 'Packet' : " + typeof "Packet");
console.log("🚀 ~ typeof true : " + typeof true);
console.log("🚀 ~ typeof [1,2,3] : " + typeof [1, 2, 3]);
console.log("🚀 ~ typeof { name: 'John' } : " + typeof { name: "John" });

console.log("Delete");
var myObj = { name: "John", age: 21 };
console.log("🚀 ~ myObj", myObj);
delete myObj.age;
console.log("🚀 ~ myObj", myObj);
