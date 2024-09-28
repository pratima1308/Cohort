//Syntactice Sugar

// SetTimeout

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Hi");
  await setTimeoutPromisified(3000);
  console.log("Hello");
  await setTimeoutPromisified(5000);
  console.log("Hello There");
}

solve();

// ReadFile

const fs = require("fs");
function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function readFileAsync() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

async function solve() {
  await readFileAsync(1000);
}

solve();

console.log(" Printing After Solve Function");
