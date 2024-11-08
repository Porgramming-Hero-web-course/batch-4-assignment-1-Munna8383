// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// // Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// // Sample Output:
// Alice;


const getProperty = <X,Y extends keyof X>(obj:X,value:Y):X[Y]=>{

    const result = obj[value]
    return result
 }


// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));