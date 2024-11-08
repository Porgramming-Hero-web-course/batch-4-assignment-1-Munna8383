"use strict";
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
const calculateShapeArea = (obj) => {
    if (obj.shape === "circle") {
        const output = parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
        return output;
    }
    else if (obj.shape === "rectangle") {
        return obj.height * obj.width;
    }
};
//  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
//  const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(circleArea)
// console.log(rectangleArea)
