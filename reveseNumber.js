const reverseNumber = (number) => {
  // Start Code Here
  number = number.toString().split("").reverse().join("");
  number = parseInt(number);
  return number;
};

console.log(reverseNumber(876)); //output: 678
console.log(reverseNumber(2340)); //output: 432
console.log(reverseNumber(1737822)); //output: 2287371
console.log(reverseNumber(124746)); //output: 647421
