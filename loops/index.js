//================================160120=====================================================================================================
// LOOPS
// there is a way to avoid to repeat the code
// there are 3 kinds of loops (while / do, while / for)
// it will repeat what is written until the condition becomes falthy

let x = 3;
if (x <= 10) {
  x += 1;
} else {
  x -= 1;
}

while (x <= 10) {
  console.log("Gabriela");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

// it is not recommended to write a letter inside of the loop

let y = 1;
let result = 0; // this is declared but the value is not so important, just the declaration, to avoid problems better to declare 0
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 = ${result}`);
  y++; // very important to not forget this in order to stop the forever repetition
} // this is a common way to use loops

let count = 10;
while (count >= 0) {
  console.log(`this is number ${count}`);
  count--;
}

let a = 3; // variable has to be declared 3 times --> declaring, checking, increment / decrement
do {
  // for "do" you always need a "while"
  // whatever the condition is it will do at least one round at a time and then check the condition, even though the condition is false it will print one time
  console.log(a);
  a++;
} while (a <= 100);

let zara = 100;
do {
  console.log(`there is ${zara} on the line`);
  zara--;
} while (zara >= 0); // with "do" the condition comes in between the do and the while, with "while" only the condition comes after

// for : different syntax but same task
// in "for" the order is very important
// declaring, condition, increment/decrement
// mostly used in nested situations

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// print out only the even number

for (let e = 0; e <= 10; e++) {
  if (e % 2 == 0) {
    console.log(e);
  }
}

for (let t = 0; t <= 10; ) {
  console.log(t);
  t += 2;
}

// when the increment is 100, 1000 or higher numbers...

for (let w = 100; w <= 1000; ) {
  console.log(w);
  w += 100; // this can be inside the conditioner but better if it is here
}

//for (..) {}
for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    break;
  }
  console.log(i);
}

for (let w = 0; w <= 100; w++) {
  if (w <= 20) {
    console.log(w);
    break; // we use it to exit the loop after condition // stronger than any condition
  }
}

let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("That is it");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}

// control/Strg+D when selecting a variable and then select all the variables with the same name whose name we want to change
// DRY --> do not repeat yourself!!

// in javascript everything almost can be nested, also loops

let result2 = 0;
for (let i = 0; i < 10; i++) {
  // i = 1
  for (let j = 1; j <= 10; j++) {
    // j = 2
    result2 = i * j; // 2 * 1
    console.log(`${i} * ${j} = ${result2}`);
  }
}

let str = "This is a long text"; // the loop will run as far as there are characters
for (let i = 0; i < str.length; i++) {
  console.log(`${str[i]}`);
}

let str2 = "Gabriela"; // the loop will run as far as there are characters
for (let i = 0; i < str2.length; i++) {
  console.log(`${str2[i]}`);
}
