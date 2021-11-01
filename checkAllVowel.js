function checkVocal(string) {
  string = string.toLowerCase();

  let result = true;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u"
    ) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(checkVocal("iueoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iEEuoaAAaAA")); //output: true
console.log(checkVocal("iuesdoaAAasfaAA")); //output: false
console.log(checkVocal("iueoaAIIUUaAA")); //output: true
console.log(checkVocal("iuedoaAAasfaAAs")); //output: false
