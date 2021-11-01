function lovefunc(flower1, flower2) {
  // moment of truth

  x = flower1 % 2;
  y = flower2 % 2;
  if (x !== y) {
    return true;
  } else {
    return false;
  }

  // Best practice
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false
console.log(lovefunc(85, 357)); // false
