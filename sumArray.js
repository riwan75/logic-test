function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
    // best practice

    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([1, 10, 45, 5, 3, 4, 67, 7.3]));
