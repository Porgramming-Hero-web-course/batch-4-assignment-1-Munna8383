"use strict";
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// // Sample Output:
// [1, 2, 3, 4, 5]
const removeDuplicates = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
// const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(result)
