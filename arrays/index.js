//========================200120============================================================================================

// array name <value 1>, <value2>,...
let arrStr = ["hi", "text", "text"]; // 1st way of declaring arrays // this is the most common way
console.log(arrStr);
let arrInt = []; // 2nd way of declaring arrays // this is also usual because often you don't know what is the incoming data
console.log(arrInt);
arrInt[0] = 22; // assigning 22 to the very first element of the array
arrInt[1] = 22;

// Array(num) // to create an array with num slots
let arrString = new Array(4);
let arrStr2 = Array("Hadi", "NAme1", "NAme2");
console.log(arrStr2);

// Array.of() creating array
let strArr = Array.of(3);
console.log(strArr);

// Accessing using square brackets

//Adding items
arrInt[2] = 33;
arrInt[3] = 53;

arrInt.push(663); // same type of information but different placement this is why you change
arrInt.push(222); // pushing this array to the end of the line
// in order to push it to the front and not the end of the line, we use "unshift"
arrInt.unshift(322);

console.log(arrInt); // this method is not so practical if you don't know the outcome you want
console.log(typeof arrInt); // to check the type

var firstNameArr = ["Ali", "Olga", "HAdi"];
console.log(firstNameArr.indexOf("Olga")); // if the name is in the list it will give the corresponding nr. (1 in this case)
console.log(firstNameArr.indexOf("Nancy")); // if the consoled name is not in the list then you get result -1

// array and for go very often together
let arrStringName = ["Hello 1"];
for (let i = 0; i <= 10; i++) {
  arrStringName[i] = `Hadi ${i}`;
}
console.log(arrStringName);

// deleting items;
// array.pop()
// array.shift()
let funArr = ["😎", "💪🏻", "😊"];
funArr.pop(); // in order to delete one item, it will be always the last one, brackets always empty, you don't enter a value in the brackets
funArr.shift(); // this will remove the very first element // no value inside the parenthesis
console.log(funArr);

// this will assign the value declared to the array // it will change the index, not the value
var lastName = ["Hello"];
lastName[0] = "Nsreeny";
lastName[1] = "Dany";

console.log(lastName);
// you can't change the array but you can change the index of the array

// const and var
let x = 0;
x = 2 + 2;
console.log(x);

var y = 0; // original value declaration // used for hoisting and in global situations
y = 2 + 2;
console.log(y);

const zz = 0; // i am not able to change its value anymore
// zz = 3 + 3;
console.log(zz);

let names = ["Hadi", "Ali", "Nancy", "Dany"];
let name = "jam"; // string
console.log(names.length); // index of array
console.log(name.length); // jam

// Array.slice() // slice would cut
console.log(names.slice(3));
console.log(names.splice(1, 3));

// Array.split()
let stringToArray = name.split("\n");
console.log(stringToArray); // it would split each character in the string within the array

//============================210120===========================================================

// BFF
function display(str) {
  // parameter is a var inside of the function but its value comes from outside
  console.log(str);
}

display("Hadi"); // this is used in order to debug the code // it represents the above function and console.log

// Array.isArray(arr) // to check if it is an array
const names = ["Ali", "Hadi", "Olga", "Nancy"]; // with typrof we would bet that it is an object but we need to know that it is also an array
let x = 1;
console.log(Array.isArray(names)); // i am asking if this is an array

// Array.includes() // to ask which array i am using now // is this array including "hadi"?
console.log(names.includes("Hadi"));
console.log(names.indexOf("Hadi")); // to show the index number

// Array.reverse() // Reverse
let rev = names.reverse(); // it exchanges the last and the one index at the beginning, its a shift
console.log(rev);

// Array.concat() // combines several arrays into one array
let arr1 = [1, 2, 3]; // array can also be text
let arr2 = [4, 5, 6];
let arrTotal = arr1.concat(arr2); // i call the first arry to apply a function that combines itself with the others arrays
console.log(arrTotal); // expected output --> [ 1, 2, 3, 4, 5, 6 ]

//Array.filter() // creates a new array // narrow down choices, will create a new array with the results
// its a function calling another function that we have to declare (callback is how it's called)
let result1 = names.filter(name => name.length == 4); // empty brackets so far was exec this function (no parameter)
// i am calling the array names to another function, in order to chose the name in the array that has 4 characters
// telling java script to work by name, to chose the individual names with the proposed length
// name can be replaced by x and any name (name => name.length == 4) --> this is a mini function inside the function
// you would do 2 at a time always
console.log(result1);

let result2 = names.filter(name => name.length == 4 || name.length == 5);
console.log(result2);

// Array.find() // return the value of the first element
// find will come up with the very first result it finds, as opposed to filter, which will chose several options
let result3 = names.find(name => name[0] == "A" && name[1] == "G"); // it will come only with the first option it finds

console.log(result3);

// Array.map() // creates a new array // it would replace "for" by this in order to alter the individual indexes
const intArray = [2, 3, 5, 6, 8];
let result4 = intArray.map(x => x + 1); // increase every individual index with 1
console.log(result4);
