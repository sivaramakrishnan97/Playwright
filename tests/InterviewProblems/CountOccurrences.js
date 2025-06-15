"use strict";
//Count Occurrences of Each Character in a String
function charCount(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1; // Need Explanation
    }
    return count;
}
console.log(charCount("hello"));
