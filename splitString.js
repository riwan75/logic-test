function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 2) {
        let second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}

console.log(solution('abcdef')); //, ["ab", "cd", "ef"];
console.log(solution('abcdefg')); //, ["ab", "cd", "ef", "g_"];

console.log(solution('')); //, [];

//====//
// 1. (s+'_') -> means add _ in s or string
// 3. ||[]    -> means if no match found, it'll return empty array, without this, if no match was found, it will return NULL

//===//
// in Regex
// 2. /.{2}/g -> this regexp means to return an array for all that matches the pattern (any 2 character)
//            -> . is a wildcard character (will match any one character)
//            -> {2} is a quantity specifier (specifies the lower and upper number of patterns - {lower, upper} ; the one used on the above solution means it wants specific number of matches - {2} )
//            -> g means to look for all that matches the pattern which is to look for every 2 character, without this, it'll return only the first match which is ['ab']
