//===========080120==========================================================================================================

let str = "this is long text";
console.log(str.slice(3));
let str1 = "Hi";
let str2 = "Hadi";
console.log(`${str}
${str2}`);

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str.includes("java"));
let x = true;
true ? console.log("cool") : console.log("nope");

//const

//local global
var global = "Hi I'm global";
console.log(global);
function sum() {
  let local = "Hi I am local";
  console.log(global);
  console.log(local);
}

sum();
// console.log(local); // not there

// Conditional assignment with the ternary operator
let kid = 2;
console.log(kid > 16 ? "Party" : "Home Party");
console.log(x ? "Hey that's nice" : "Oh noooooooo"); // we would´t know how java script would react to this, better not use this

//brackets notation [0]

// `'\`, `\"`, `\n` for a new line
console.log("Hi I am \n Hadi");

// .trim() deletes spaces beginning and end
let str4 = "Hadi";
console.log(str4.trim());
function print(str) {
  console.log(str);
}
print("Hadi");

// Numbers
let z = 1;
let w = 1;
console.log(z + w);
console.log(z - w);
console.log(z * w);
console.log(z / w);
console.log(z % w); // this will give you the remainder

// Integers vs. Floats
let int1 = 11;
let int2 = 1.5;
console.log(int1 + "" + int2);

// isNaN // is not a number
console.log(isNaN(int1) ? "yeah it is a string" : "Nope sorry");

// Converting Strings into Numbers
let strInt = "2";
let strInt2 = "2";
let result = strInt + strInt2;
let newNum = parseInt(strInt, 16); // converts the string into a number together with the other lines, and it will select the number system, decimal, etc...
console.log(newNum);

//Modulo %
let lastNum = 4 % 2;
console.log(lastNum);

//*+-/++--
let q = 3;
let s = 4;
let sum1 = q + s;
let div1 = q / s;
let mul1 = q * s;
console.log(sum1, div1, mul1);

// Exponentiation ** the power of (new added)
let power = 2 ** 2;
console.log(power);

//Math.floor()
let float3 = 1.3;
let realIni = Math.floor(float3);
console.log(realIni);

//Math.ceil()
let realIni2 = Math.ceil(float3);
console.log(realIni2);

// Math.max()
console.log(Math.max(800, 1, 3339.5, 4, 66, 700));
console.log(Math.max(x, z, q, s));

// Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));

//===========090120==========================================================================================================

let x, y, z; //
x = 1; //
y = "T";
z = x + y;
console.log(x);
console.log(Math.max(33, 44, 52, 111111, 76, 7, 0));
console.log(Math.min(33, 47111, 4, 5, 6, 0.3, 7, y));

//we create this short cut to not have to use console.log all the time
function display(str) {
  console.log(str);
}
display("Hi this is a new function");

// every information entered by the user will first appear as string, it has to be turned into number tu be calculated
let strInt = "12333";
let strInt2 = "999";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));

// same with decimals, we use the US system but since european users will enter data with commas we have to be aware of that
let strFloat = "333.553";
console.log(parseFloat(strFloat));

// round up and down
let float1 = 2.4;
console.log(Math.ceil(float1)); // will round up the number
console.log(Math.floor(float1)); // will round down the number

let str1 = "this is a  new text";
console.log(str1.toUpperCase());

//Addition
// x + y * s

console.log(((x + y) / (z + 2.3)) * 29 + x);

// String + Number
let d, f, r;
d = 5;
f = "Hi I'm Gabriela";
console.log(f + d);

// Concatenation

// String + Boolean
r = true;
console.log(r + d); // true in javascript is 1 and false is 0

// String + String
let str2 = "Hi";
let str3 = " I am Gabriela";
console.log(str2 + str3);

// typeof (Objects, functions, console...)
console.log(typeof str3); // I would use it when I am not sure what type of data I am dealing with (whether it is a string or a number), often you don't know the type of data because it is coming from the backend
console.log(typeof x);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math.floor);

// (0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
console.log((floatNum * floatNum1).toFixed(3)); // this makes the result be limited to 3 digits after the comma

let floatNum2 = 0.1;
let floatNum3 = 0.2;
let num = 3;
let result = floatNum2 * floatNum3;
let lastResult = result.toFixed(num);
console.log(lastResult);

// 1.23e+5 some number have an e (big number that is replaced by e)

// x = 3.444
let intStr = "10 Hi this is cool"; // if the 10 is at the end it is not interpreted as a number
let floatStr = "1033.3 hi this is noooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));
//console.log(x.toFixed(2));

// && || (and or)
let var1 = true;
let var2 = true;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool"); // if ALL variables are true then "cool", else "not cool"

let var4 = 1 > 4; // false
let var5 = false;
let var6 = true;
console.log(var3 && var4 && var5 ? "cool" : "not cool"); // if ALL variables are true then "cool", else "not cool"
console.log(var3 || var4 || vcar5 ? "cool" : "not cool"); // if ONE of the variables is true then "cool", else "not cool"

// = Assigning
console.log(ohNo);
var ohNo;
ohNo = x; // if it would be LET it would apply only to this function and the variable would have tpo be declared before the console.log
console.log(ohNo);

console.log(ohNo2);
var ohNo2;
let xx = "1";
ohNo2 = 1;
console.log(ohNo2);

// == vs ===
// 2 times = to check if one number is equal to the other
// 3 times = to
console.log(1 == 1 ? "yeah it is" : "nope it is not");
console.log(1 == 2 ? "yeah it is" : "nope it is not");
console.log(x == 1 ? "yeah it is" : "nope it is not");
// console.log(x == OhNo ? "yeah it is" : "nope it is not");
// console.log(xx === OhNo2 ? "yeah it is" : "nope it is not");

// Truthy and falsy values: false, undefined, null, 0, ''

console.log(true ? "yes" : "Noooooo"); //every number but 0 is true in javascript
console.log(1 ? "yes" : "Noooooo");
console.log(0 ? "yes" : "Noooooo");
console.log("any word" ? "yes" : "Noooooo"); // any content in the string is true
console.log("" ? "yes" : "Noooooo"); // empty string is always false
console.log(null ? "yes" : "Noooooo"); // false
console.log(undefined ? "yes" : "Noooooo"); // falthy
console.log(Math.random ? "yes" : "Noooooo"); // I wanna check if these things exists

// what is not a number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

var NotaNumber = undefined;
console.log(isNaN(NotaNumber) ? "true" : "false");
console.log(isNaN(NotaNumber) ? "this is NOT a number" : "this is a number");

var NotaNumber2 = true;
console.log(isNaN(NotaNumber2) ? "true" : "false");

var NotaNumber3 = null;
console.log(isNaN(NotaNumber3) ? "true" : "false");

var NotaNumber4 = "37";
console.log(isNaN(NotaNumber4) ? "true" : "false");

var NotaNumber5 = "";
console.log(isNaN(NotaNumber5) ? "true" : "false");

// Math.random // we will constantly use it in react
console.log(Math.floor(Math.random() * 10) + 1); // you multiply in order to move the comma and get some control // Math.floor is used to turn the number integer

//===========090120==========================================================================================================

// console.log(x.toFixed(4));
let old, nice, crazy;

old = true;
nice = false;
crazy = true;

console.log(!crazy); // explanation mark wil give you the opposite to this situation
console.log(1 !== 1); // if the program thinks 1 is not equal to 1 you are telling it it is
console.log(old !== crazy); // not true because old is equal to crazy
console.log(old !== nice); // true because old and crazy are ot equal

// boolean inversion with !
//console.log(crazy ! "Yeah" : "nope");

//  givenName || firstName || "ABC";

console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log(givenName || firstName || "Abc"); // if all of them ar eundefined then its undefined, if two are truthy it will take the first one to console.log

// let's do some algorithms

// Nancy's income is 500€ per week. how much does Nancy makes every year?
const nancySalary = 500 * 52;
// console.log(nancySalary)
console.log(`Nancy Salary ${nancySalary} Euro in one year`);

// the amount of hours Nancy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 what is nancy's average hour?

const nancyAverage = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(nancyAverage);
console.log(`Nancy average hours of ${nancyAverage} in a week`);

// hadis version
const nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage2 = nancyWorkingHours / 10;
console.log(
  `Nancy worked last two weeks ${nancyWorkingHours}, the average is ${nancyAverage2}`
);

// if (<boolean>){...}
console.log(true ? "yeah cool" : "nope sorry");

let a, b, c;
a = true;
b = false;
c = true;
let counter = 0;
let logIn = false;
if (a == b && c) {
  // false && true is understood as false
  console.log("Nice");
  counter = 2; // if statement is truth assign 2 to the counter and true to the logIn
  logIn = true;
} else {
  // is the statement is true then it will print Nice, otherwise it will print Not cool
  console.log("Not cool");
  counter = 3;
  logIn = false;
}

// `if` vs. ternary operator | if (true) {condition} curly brackets for the truthy situation {} if this is not true java script will ignore it
// preserved words can't be used as variables in java script, for example if
if (true) {
  console.log("yeah it is true");
}

if (false) {
  let superHero = 44; // usually variables are declared outside the curly brackets not inside
  console.log("no it's not true"); // if the declaration is nor true java script will ignore it
}

if (1 < 4 || (1 < 55 && false)) {
  console.log("yeah its true");
}
