const fs = require("fs");

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("asd.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("Files has been read");
  })
  .catch(function (e) {
    console.log(e);
  });
