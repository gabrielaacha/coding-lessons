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

//==========================270120=============================================================

//-----spread syntax (...) [...array]---------------------------------------------------------------

let array = [1, 3, 45, 6];
let copyArray = [...array]; // you can also write just = array but when working with objects better this way
console.log(copyArray);

//---------------------------------------------------------------------------------------------------

function sum(...args) {
  // stands for arguments
  let array = args; // better to use args than x

  console.log(array);
}
sum(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);

//---------------------------------------------------------------------------------------------------

// add all the number of the array

function sum(...args) {
  // stands for arguments
  let array = args; // better to use args than x
  let result = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(array.reduce(reducer));
  return `the sum is §{result}`;
}
sum(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);
sum(7, 88, 98, 9);

//---------------------------------------------------------------------------------------------------

function sum2(...args) {
  // you use this whenever you don't know what the length of the array is
  // stands for arguments
  let array2 = args; // better to use args than x
  let result2 = 0;
  const reducer2 = (a, b) => a + b;
  console.log(array2.reduce(reducer2));
  return `the sum is §{result}`;
}
sum2(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8);
sum2(7, 88, 98, 9);

//---------------------------------------------------------------------------------------------------

// when i have array i need loop
function sum3(...args) {
  // stands for arguments
  let array3 = args; // better to use args than x
  let result3 = 0;
  for (let i = 0; i < array.length; i++) {
    result3 += array[i];
  }
  return `the sum is ${result3}`;
}
console.log(sum3(3, 4, 3, 5, 6, 7, 8, 2, 3, 2, 23, 2, 3, 54, 6, 5, 56, 8));
console.log(sum3(7, 88, 98, 9));

// function that will receive unknown amount of VREyeParameters, console log how many parameters the user entered:

function sum4(...args) {
  console.log(...args);
}
function sum5(...args) {
  let array4 = args;
  for (var i = 0; i < array4.length; i++) {
    console.log(array4[i]);
  }
}

//----Hadi-----------------------------------------------------------------------

const howManyArgs = args => console.log(args.length);
howManyArgs(23, 54, 32, 123);

//------------------------------self-invoqued function-----------------------------

(function add() {
  console.log("Hi");
})();

//------------------------------------------------------------------------------------

//========================03022020===================================================

// functions inside functions
function main(num, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n; // 9
  } // 9    // 16
  return second(num) + second(num2);
}

console.log(main(3, 4));

// nested scopes : accessing outer global variables
var nice = true; // here i am declaring the variable outside of the scope, i can use it everywhere, in the inner and outer function
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + "outerFunction");

  const innerFunction = num => {
    big = false; // i am not able to access that outside of the scope
    nice = false;
    console.log(big + "innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4)); // you would get two results because the function is called twice
console.log(nice);

// closure
// you wanna access a variable that is global but you don't need anyone to do it
// most common way to secure information
var number = 10; // this declaration has to be outside of the function
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);

//---------------------------------

function add() {
  var counter = 0; // you move the counter inside the function // it is more secure, nobody can change it
  counter += 1; // or you can have counter++ instead
  return counter;
}

add(); // 1
add(); // 2
add(); // 3
console.log(add());

// anonymous function
// invoking == calling
const add2 = (() => {
  // you can also add a value to this function
  var counter = 0;
  return function() {
    counter++;
    return counter; // this function is anonymous and it is returning another function
  };
})();

add2(); // 1
add2(); // 2
add2(); // 3
console.log(add());

//----------------------

// const add = (() => {}) () // this is a self invoked function
// this function will call itself automatically all the time

const add3 = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
add3(); //1

//-----------------------------

(function display() {
  let x = 0;
  console.log("hi");
  return () => {
    x++;
    return x;
  };
})(); // function call right after the function declaration // good to secure information // invoking is like calling itself // parenthesis () is a function call immediately after the function
// this is used mainly for security, the function works same as when it is not self invoked
// common to use it for shopping or for when the user has to amend info, etc
// it is theoretically a call back function but in this context it is called closure because it is securing the global value so no one can amend
// display();

//-------------------------

// SIAF self invoked anonymous functions // closed to itself and called immediately
// this will reder one time and immediately
(function() {
  console.log("Hi");
})();
// not anonymous
// two ways + passing parameter
// this i would use if i need to recur to the function more times
const sum = ((x, y) => {
  return x + y; // the value is from return
})(5, 6); // now you are assigning a value to the function and thus to the variable
// useful for payments with cards etc...
console.log(sum);
