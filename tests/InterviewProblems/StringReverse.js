"use strict";
// Reverse the string
function StringReverse(S1) {
    const result = S1.split('').reverse().join('');
    return result;
}
console.log(StringReverse("Hi World"));
