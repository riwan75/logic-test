function reverseWords(str) {
  // Go for it
  rev = str.split("").reverse().join("").split(" ").reverse().join(" ");
  //   console.log("REV", rev);

  //   .reverse().join("").split(" ").reverse().join(" ");
  return rev;
}

// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); //output: 678
console.log(reverseWords("apple")); //output: 432
console.log(reverseWords("a b c d")); //output: 2287371
console.log(reverseWords("double  spaced  words")); //output: 647421
