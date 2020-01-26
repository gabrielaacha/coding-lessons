//========================140120=========================================================

// switch (<expression>){ ... } // it is used for ex. for currencies, for phone prefixes,
const color = "Pink";
switch (color) {
  case "Pink":
    console.log("cool");
    break;
  case "Black":
    console.log("Nice");
    break;
  case "white":
    console.log("soooo nice");
    break;
  default:
    console.log("Noooo that's crazy");
}

// an example of switch in order to choose one month of the year:

const month = 9;
switch (month) {
  case 0.1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sept");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("This is not real");
}

// another example for switch:

const x = 22.22;
switch (x) {
  case 1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 1000000001:
    console.log("cool");
    break;
  default:
    // you always need a default in case the user types something that is not listed
    console.log("so this is not for fun or is it!");
}

// switch` vs. `else if`

const num = 1;
if (num <= 10 || num >= 0) {
  console.log("it is num in the range of 0 and 10");
}
if (num == 1) {
  console.log(num);
}
if (num == 2) {
  console.log(num);
}
if (num == 3) {
  console.log(num);
}
if (num == 4) {
  console.log(num);
} else {
  console.log("It is new num");
}

const num2 = 1;
switch (num2) {
  case 1:
    console.log(num2);
    break;
  case 4:
    console.log(num2);
    break;
  case 3:
    console.log(num2);
    break;
  default:
    console.log("this is fun");
}
