const digitize = (n) => {
  //code here
  n = n.toString().split("").map(Number).reverse();

  return n;
};

console.log(digitize(35231)); //1,3,2,5,3
