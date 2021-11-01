const filter_list = (l) => l.filter(Number.isFinite);

// Return a new array with the strings filtered out

console.log(filter_list([1, 2, "a", "b"])); //,[1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // ,[1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123, 0.34])); // ,[1,2,123]
