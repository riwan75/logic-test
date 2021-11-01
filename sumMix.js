const sumMix = (x) => x.reduce((x = (x, y) => +x + +y));
// x
//   .join(" ")
//   .split(" ")
//   .map((x = (x) => parseInt(x)))
//   .reduce((x = (x, y) => x + y));

// const sumMix = (x) => {
//   let res = 0;

//   res = x.map((x) => +x);
//   console.log(res);
// };

console.log(sumMix([9, 3, "7", "3"])); // 22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //  42
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); //  41
