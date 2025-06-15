// 1. Flatten a Nested Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function flatternArray(arr) {
    return arr.flat(Infinity);
}
var res1 = flatternArray([1, [2, [3, [4]]]]);
console.log(res1);
// Method 2
function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
// 2. Filter Unique Elements from Array
function UniqueElementInarray(arr) {
    return __spreadArray([], new Set(arr), true);
}
console.log(UniqueElementInarray([1, 2, 4, 4, 3, 2, 7]));
function uniqueElements(arr) {
    return __spreadArray([], new Set(arr), true);
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
// filename: test.ts
function uniqueElements1(arr) {
    return __spreadArray([], new Set(arr), true);
}
var testArray = [1, 2, 2, 3, 4, 4];
console.log("Input:", testArray);
console.log("Output:", uniqueElements1(testArray));
