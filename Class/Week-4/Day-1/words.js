// Count number of words

const fs = require("fs");

function main() {
  //   console.log(process.argv); - can be used to display the path and also join words

  fs.readFile("b.txt", "utf-8", function (err, data) {
    let total = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i] === " ") {
        total++;
      }
    }
    total = total + 1;
    console.log("Total number of words are ", total);
  });
}
main();

// main(process.argv[2]); - can be used to display the path
