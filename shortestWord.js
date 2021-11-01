function findShort(s) {
  res = 0;
  res = s.split(" ").sort((a, b) => a.length - b.length);

  return res[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
