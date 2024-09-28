function countVowels(str) {
  let count = 0;
  str = str.toLowerCase().split("");
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

// countVowels("Pratima");
// countVowels("RAhul,Rita");
// countVowels("Raj Rani");
countVowels("Hello, World!");
