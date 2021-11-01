function compareTriplets(a, b) {
  // Write your code here
  let result = [];
  let scoreA = 0,
    scoreB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) scoreA++;

    if (a[i] < b[i]) scoreB++;
  }
  result[0] = scoreA;
  result[1] = scoreB;
  return result;
}

console.log(compareTriplets([10, 20, 30, 40, 50], [10, 19, 31, 39, 51]));
