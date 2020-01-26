//=============================210120==========================================================

// FUNCTIONS

// place where i exec this line multiple times whenever i call the function
// function sum (){
// }
// everything that happens in the function stays in the function
// for example:

function sum(x, y) {
  let result = x + y;
  return result; // you use return to link the console.log to the function, whenever it is located outside of it {}
}
// function declaration and function call
let fun = sum(2, 4); // this is function call
console.log(fun);

function div(x, y) {
  return x / y;
}

function age(x) {
  if (x == 30) {
    return "you are cool";
  } else {
    return "you are nice";
  }
}

console.log(age(20)); // the function call will come with a result and i am consoling.log the result
// better not to name local and global variables with the same name

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [9, 289, 13, 214, 5654, 6, 130, 455, 66444];
function arrBig(array) {
  // whatever the parameter is is connecting the function with the declared arrays
  let result = array.filter(num => num <= 500);
  return result; // it's pushing the function to the outside world, without return everything stays in the function
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));

// create  a function picking the names with 4 characters in an array
function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
console.log(fourArrChar(names2));

// create a function grabbing the names that starts with the letter "o"

function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(Ochr(names2));

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function nameOfThatMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a month");
  }
  return result;
}

console.log(nameOfThatMonth(2));

function monthOfMyBirthday(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "J") {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(monthOfMyBirthday(monthNames));

let monthOfMyBirthday2 = monthNames.find(name => name.length == 4);
console.log(monthOfMyBirthday2);

// hadis

function nameOfThatMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num <= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "sorry it is not a month";
  }
  return result;
}

console.log(nameOfThatMonthEasyVersion(3));

//==========================220120=============================================================

// ES6 system uses => instead of the function word. it is assigning the function result to a variable. var sum = function(z,s){}

const sum = (x, y) => {
  return x + y;
};

sum(5, 4);

// Array.map(value, index =>{} // creates a new array
// its not about naming system but about the order
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map((name, index) => name[0] == "0");
console.log(newArr);

// below the updated ES6 system:
// its a call back situation
names.forEach((name, index) => console.log(name + " index num = " + index));

//old system below:
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " index num = " + i);
}

// Array.reduce()
// const reducer = (acc, cur) => acc + value;
// its also a call back function

const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc (accumulator) + cur (current value) // acc = 0 and cur = 1 in the first round
console.log(numArr.reduce(reducer));

console.log(numArr.reduce(reducer, 100)); // syntax of ES6, its a number to start in the accumulator

// call stack
// 6000 max. of functions inside functions

function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  return "Hi";
}

console.log(first(callback(callTwo()))); // up until 6000 functions

// our bff
function display(str) {
  console.log(str);
}

//turns into...

const print = str => console.log(str);
print("hadi");

// function <name>(<parameter>){...}
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val);
}

yellow(2, 3); // you call the function follow by the executing situation
// parameters are values used inside of the function, value comes when i apply my function call
// when i have two parameters i separate them with a comma

function pink(name, age) {
  console.log(`Hi ${name}, you are young ${age}`);
}

pink("Ali", 20);

yellow(2, 3);
const AliPets = ["Dyson", "Sofi"];
function pink(name, array, age = 10) {
  // in case someone will not enter age the default value will be 10, default value at the end
  console.log(`Hi ${name}, you are young ${age}, you hace nice pets ${array}`);
}

pink("Ali", AliPets, 20);
pink("Ali", 20, ["Dyson", "Sofi"]); // very important to follow the order and not skip any value

// ES6 system would be
const pink2 = (name, array, age = 10) => {
  console.log(`Hi ${name}, you are young ${age}, you hace nice pets ${array}`);
};

pink2("Ali", AliPets, 20);
pink2("Ali", 20, ["Dyson", "Sofi"]); // very important to follow the order and not skip any value

const greeting = (nam, add, age, pla) => {
  // not able to change the variable anymore
  age += 20; // this is implemented into the initial value, it would to the existing value, in this case 20 + 10add up
  nam += ",";
  pla += " DE";
  add += "";
  return `Hey ${nam} it is very nice to live in ${add} you are getting older too fast ${age}, in your old ${pla}`; // return will give me the result
};
console.log(greeting("Ali", "xx str", 10, "Berlin")); // this is the initial value, the function call

// create a function without parameter and without return:
const add = () => {
  let x = 1120 * 3;
  console.log(x);
};

add(); // this is the function call, without it is not executing at all // functions, array and objects always needs const

// variables in function
