// anything in javascript is an object /7 there are three types of formulating objects
//..................
// keys, properties : value (sometimes named methods instead of property) / key is how variables are called here // lettering
const o = {
  1: "Hadi",
  2: "Ali",
  3: "olga"
};
//...............
const obj = {
  // i use const to prevent other people to change name of the variable, etc
  name: "nancy",
  lastName: "saaaa",
  age: 44,
  address: "xxx str"
};
// i don't need this really:
let aliName = "Ali";
let aliAdd = "xxx str";
let aliAge = 22;
let aliLastName = "something";
// we do this to look for storage keeping related data together

//........const <namespace> = { <key> : <value 1>, <key2>: <value 2>,...} // assigning.....................................
const object = {
  color: "red",
  size: "big",
  year: 1990,
  arr: [1, 2, 3, 4, 5, 6, 7]
}; // key column value data

//....accessing properties with [bracket notation].........................................................................
const car = {};
console.log(car);
car["name"] = "Ford";
console.log(car);
car["year"] = 2020;
console.log(car);
//..................

//.....Accessing properties with [dot notation].............................................................................
car.age = 22; // there is no difference between bracket notation and dot notation
car.age = 44; // this will overwrite the previous age
console.log(car); // expected outcome:
// { name: 'Ford' }
// { name: 'Ford', year: 2020 }
// { name: 'Ford', year: 2020, age: 44 }
console.log(car.name); // this will come up just with the value
console.log(car["name"]); // this will give the same answer as above // up to each one which ine to use
// when we assign new stuff go for the bracket situation

//..................creating new object:
const save = new Object();
const arr1 = new Array();
console.log(save);
// expected outcome: empty object
console.log(car.name);
console.log(car);

//...................for.............................................................................................
// we have fof for objects but it looks a bit different than what we saw so far
for (let prop in car) {
  // prop for properties, we can name it as we want
  console.log(`car.${prop} : ${car[prop]}`);
}
//...............object.entries()...................................................................................
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  print: function() {
    console.log(
      `this user ${person.name} his birth year is ${person.birthYear}` // i am able to look inside of my object from the string
    );
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};

//................object.keys.......................................................................................
console.log(Object.keys(person)); // expected outcome : [ 'name', 'age', 'birthYear' ]
//..................
// to access the key names and not the values :
console.log(Object.values(person)); // expected outcome ; [ 'Zain', 20, 2000 ]
//..................
// if I wanna access both of them : object.entries()
for (let [key, value] of Object.entries(person)) {
  // now we have for of (instead of for in)
  console.log(`${key} : ${value}`);
}

//.................. methods.........................................................................................
// when the property is a function you call it methods
person.print(); // this is the function call for the previous function // print: function() {}
console.log(person.old());

//.......object assign....................................................................................................
// to copy two objects and put them in another object
const obj1 = { 1: 2, 2: 300 }; // this is the source
const obj2 = { 1: 4, 3: 3224 }; // this is the target
const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
console.log(totalObj);
// expected outcome: { '1': 4, '2': 450, '3': 3224, '4': 55, '5': 980 }

//..........Object.defineProperty().....................................................................................
Object.defineProperty(person, "birthDay", {
  // calling my object, 1st parameter is object name, the second is the prop name and the last has the value of the property that i am creating
  value: 20,
  writable: false // with this i wont be able to change the parameter even if i introduce a new value
  //writable: true // if its true i can skip this
});
console.log(person.birthDay);

//..........Object.defineProperties()......................................................................................
Object.defineProperties(person, {
  // first parameter is the object and second parameter the values you are passing
  p1: {
    value: "hella",
    writable: true // you can overwrite
  },
  p2: {
    value: 30,
    writable: false // cant overwrite
  },
  p3: {
    value: "hello"
  }
});

console.log(person.p3); // these properties would add up to the already existent ones
