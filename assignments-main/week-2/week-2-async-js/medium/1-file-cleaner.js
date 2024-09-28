/*  File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

const fs = require("fs").promises;

async function cleanFile(filename) {
  try {
    let content = await fs.readFile(filename, "utf8");

    const cleanedFile = content.replace(/\s+/g, " ").trim();

    await fs.writeFile(filename, cleanedFile, "utf8");

    console.log("File has been cleaned successfully!");
  } catch (error) {
    console.error("Error Occurred:", err);
  }
}

cleanFile("example.txt");
