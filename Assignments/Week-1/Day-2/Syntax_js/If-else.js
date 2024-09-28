// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
let msg = evenOdd(0);
let msg2 = evenOdd(25);
console.log(msg);
console.log(msg2);
