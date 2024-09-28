function palindrome(str1) {
  let str = str1.split("").reverse().join("");
  if (str.toLowerCase() === str1.toLowerCase()) {
    console.log(str1 + " is a Palindrome");
  } else {
    console.log(str1 + " is it not a Palindrome");
  }
}
palindrome("Naman");
palindrome("naman");
palindrome("Mister");
palindrome("mam");

// palindrome("Eva, can I see bees in a cave?");
