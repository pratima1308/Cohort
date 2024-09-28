/* Promisified Function: When u have resolve and " .then(callback) function"

Callback function - When u have nested Promisified Functions or Nested Functions */

//Promisified Function

function setTimeoutPromisifies(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("5 second has passed");
}

setTimeoutPromisifies(5000).then(callback);

// Callback Hell

setTimeout(function () {
  console.log("Hi");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Hello There");
    }, 5000);
  }, 3000);
}, 1000);

// Callback Hell Promisified

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromisified(1000).then(function () {
  console.log("Hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("Hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("Hello There");
    });
  });
});

// Promise Chainig

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromisified(1000)
  .then(function () {
    console.log("Hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("Hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("Hello There");
  });
