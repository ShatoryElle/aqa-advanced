// Function Declaration
function getAreaDeclaration(width, height) {
  return width * height;
}
console.log("Area (Declaration):", getAreaDeclaration(5, 10));

// Function Expression
const getAreaExpression = function(width, height) {
  return width * height;
};
console.log("Area (Expression):", getAreaExpression(8, 4));

// Arrow Function
const getAreaArrow = (width, height) => width * height;
console.log("Area (Arrow):", getAreaArrow(12, 3));