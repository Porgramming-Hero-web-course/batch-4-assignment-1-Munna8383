"use strict";
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
const updateProfile = (myProfile, obj) => {
    const result = Object.assign(Object.assign({}, myProfile), obj);
    return result;
};
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
