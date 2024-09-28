const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program
  .command("countWords")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program
  .command("countLetters")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const letters = data.split("").length;
        console.log(`There are ${letters} letters in ${file}`);
      }
    });
  });

program.parse();

// To get Output in terminal

// node index.js count C:\Users\Pratima\OneDrive\Desktop\a.txt

// node index.js countWords C:\Users\Pratima\OneDrive\Desktop\a.txt

//  CLI - it helps to get commands available in the package - node index.js -h

// alias name in terminal - alias wordscli="node index.js"
// so to print we can use wordscli -h
 