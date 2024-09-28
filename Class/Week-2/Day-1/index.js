// 1. Find sum of 2 number

//Typescript
// cast it to a number

function sum1(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(sum1("20", 3));

//add number with string

function sum(a, b) {
  return a + b;
}

console.log(sum("20", 3));

// 2. Find sum from 1 to a number

function sum2(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sum2(5));

// sync

const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
const content = fs.readFileSync("b.txt", "utf-8");
console.log(content);

// async - is used wherever I/O intesive operations are required

const fsa = require("fs");

function print(err, data) {
  console.log(data);
}

fsa.readFile("a.txt", "utf-8", print);
fsa.readFile("b.txt", "utf-8", print);
console.log("Done!");

// settimeout

function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 5000);

console.log("Welcome!");

// which line runs first and continues

function time() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(time, 1000); // didnt run after 1sec becoz the thread wasn't free and was running the loop first - I/O intensive task

console.log("Welcome!");

// CPU intesive task
let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c = c + 1;
} // CPU is busy completing the task

console.log("Expensive operation done!");
