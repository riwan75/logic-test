const roundToNext5 = (n) => {
    return Math.ceil(n / 5) * 5;
};

// const roundToNext5 = (n) => Math.ceil(n / 5) * 5;

console.log(roundToNext5([23])); //25
console.log(roundToNext5([-5])); //-5
console.log(roundToNext5([-1])); //0
