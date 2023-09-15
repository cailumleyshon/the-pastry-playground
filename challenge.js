function calculateSum(calc1, calc2, operator) {
  if (operator === "+") {
    return parseInt(calc1) + parseInt(calc2);
  } else if (operator === "-") {
    return parseInt(calc1) - parseInt(calc2);
  } else if (operator === "/") {
    return parseInt(calc1) / parseInt(calc2);
  } else if (operator === "*") {
    return parseInt(calc1) * parseInt(calc2);
  } else {
    return NaN;
  }
}

let calc1 = prompt("Insert a number for the calculator");
let calc2 = prompt("Insert another number");
let operator = prompt("Add a math simple ex: +");

if (
  operator === "+" ||
  operator === "-" ||
  operator === "/" ||
  operator === "*"
) {
  let result = calculateSum(calc1, calc2, operator);

  if (!isNaN(result)) {
    alert("The answer is: " + result);
  } else {
    alert("Invalid input. Please enter valid numbers.");
  }
} else {
  alert("Invalid math symbol. Please enter +, -, *, or /.");
}
