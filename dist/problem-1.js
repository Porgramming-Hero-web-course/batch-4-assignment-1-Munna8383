"use strict";
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// // Sample Input:
// sumArray([1, 2, 3, 4, 5]);
// // Sample Output:
// 15;
const sumArray = (arr) => {
    const result = arr.reduce((acc, current) => acc + current, 0);
    return result;
};
// const result = sumArray([1, 2, 3, 4, 5]);
// console.log(result)
