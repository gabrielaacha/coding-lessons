//===============Recap of important javascript topics================

//===============var, let, const=====================================

var x = 0; // var is global and can be used with hoisting
let y = "3";
y = 3; // i can change the value of the variable after the semicolon
const q = 12; // is fixed, I can't change the variable after the semicolon
// sumInt; // we use camel case // no use special characters in naming the variables

//=================increment==========================================

let a = 0;
a++; // every time i write this, there will be 1 added a = a+1 or a += 1, both are exactly the same

let str = "Hi"; // it also works with strings
str += "  how are you";
console.log(str);

//=============decrement===============================================

//let b--; // a will be decreased by 1 --> same as a= a -1 or a=-1

//===============functions <name>(<parameters>){...}=============================

function sum(x, y) {
  // function - name - parameter // you can have no parameter // parameter is a value that is outside the function and is called by the function
  let z = x + y;
  return z; // you want to send the result outside of the local scope
}
console.log(sum(2, 3)); // without console.log i won't see anything // this is the function call, this will make the operation been executed

//====variables in function===============================================

function fun() {
  const num = 10;
  const num2 = 20;
  console.log(num + num2);
}

fun(); // the function cannot call itself, you always need a function call

//------------------------------------

function fun2() {
  const num3 = 10;
  const num4 = 20;
  return num3 + num4; // if you use return you have to return the values (not the function), or a backtick or something else, but not the function name
}

console.log(fun2()); // the function cannot call itself, you always need a function call

//------------------------------------

let string = "this is a long test";
console.log(string[0]);
console.log(string.substring(0, 4));
let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
let newStr2 =
  string.substring(0, 2).toUpperCase() + string.substring(1).toLowerCase();

console.log(newStr);
console.log(newStr2);

//-------------------------------------

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof arr); // we will be able to see what type of element we are dealing with

//-------------------------------------

let blue = true;
console.log(blue ? "Nice" : "Nooo"); // ternary operator, true or false

//-------------------------------------

if (1 < 10) {
  arr.push(1);
} else if (1 == 20) {
  arr.unshift(1);
} else {
  arr.push(2);
  a++;
}

//-------------------------------------

let color = "Black";

switch (color) {
  case "pink":
    arr.push(1);
    break;
  case "black":
    console.log("hi");
    break;
  default:
    // whatever other cases that were not mentioned
    a++;
    console.log("THis is not OK");
}

//=========== const <function name = (<parameters>) => {...} ====================

const div = () => {
  const you = () => {
    return 3;
  };
  return you();
};

console.log(div());

//===================Arrays====================================

const names = ["Ali", "Olga", "Nancy"];

//---------Array.includes()-------------------------
console.log(names.includes("Ali")); // it wil check the entire array and say if its there or not (true or false)
//----------Array.indexOf(<item>)------------------
console.log(names.indexOf("Ali"));

//-------Add items------------------------------
//----Arr.unshift --> it would add an index to the beginning of the array
console.log(names.unshift("Zara"));
//-----arr.push --> it would add an index at the end of the array
console.log(names.push("Zara"));

//-------Remove items------------------------
//Array.pop --> it would remove the last index
console.log(names.pop()); // I don't have to add anything
//Array.shift --> it would remove the first item
console.log(names.shift()); // i have to add the index that I wanna add

//---------Array.slice()-------------------------

//----------Array.split()------------------------
const arr1 = ["Hi", "this", "is"];
const arr2 = ["me", "writing", "you"];

//---------Array.concat()-------------------------
const arrTotal = arr1.concat(arr2);
arrTotal.push("mothafucka");
console.log(arrTotal.join(""));

//-----------Array.filter()---------------------
// creates new array
console.log(names.filter(name => name.length == 3 || name.length == 4)); // this is function without name, anonymous function, I am only calling it inside the function

//-----------Array.find()----------------------
const numbers = [1, 2, 3, 4, 5, 6];
let arrCall = numbers.find(num => num <= 1);
console.log(arrCall);

//----------Reverse()--------------------------
const str3 = "javascript";
let newRevStr = str3 // you don't need a semicolon here
  .split("")
  .reverse()
  .join("");
console.log(newRevStr);

//============================RECAP==290120====================================================================================

function display(random) {
  // let random = 0; // NEVER DO THIS // this is mistake, never declare the parameter as a variable // you are not meant to reassign, only modify, multiply, etc..
  let newArr = random.toLowerCase().split(" "); // this is correct, you are just modifying not assigning new value
  console.log(newArr);
  return newArr;
  global += 2;
}
let newArr = 5;
console.log(display("Hi ma name")); // this is my return;
console.log(newArr); // this was local var for display function

//----------------------------------

// function display(random) {
//     // let random = 0; // NEVER DO THIS // this is mistake, never declare the parameter as a variable // you are not meant to reassign, only modify, multiply, etc..
//     // let newArr = random.toLowerCase().split(""); // this is correct, you are just modifying not assigning new value
//     // return newArr;
//     for (let i = 0; 0 < kids.length; i++) {

//     }
//   }
//   let newArr = 5;
//   display("ALi", "Nancy", "Olga");
//   console.log(newArr); // this was local var for display function

//==============================RECAP==030220============================================================================

//----loops----------------------------------------------------------------
for (let i = 10; i >= 0; i--) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result}`);
}

//-----------if else------------------------------------------------------
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Nooooooo");
}
//-----------------------------array--------------------------------------
// multiple values in one variable
const arr = [3, 4, 67, 6];
console.log(arr[2]);
