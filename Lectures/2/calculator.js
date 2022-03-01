
function checkIsProperNumber (val, variableName) {
    // Check if parameter has been given
    // if (!val) throw `${variableName || 'provided variable'} is not supplied`

    // Check parameter type is a number
    if (typeof val != 'number') throw `${variableName || 'provided variable'} is not a number`

    // Also required for some reason
    if (isNaN(val)) throw `${variableName || 'provided variable'} is NaN`
}

let x = "Hello, World!";
module.exports = {
    description: "This is a calculator for CS546",
    addTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, "The first number");
        checkIsProperNumber(num2, "The second number");
        return num1 + num2;
    },
    subtractTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, "The first number");
        checkIsProperNumber(num2, "The second number");
        return num1 - num2;
    },
    multiplyTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, "The first number");
        checkIsProperNumber(num2, "The second number");
        return num1 * num2;
    },
    divideTwoNumbers: (num1, num2) => {
        checkIsProperNumber(num1, "The first number");
        checkIsProperNumber(num2, "The second number");
        if (num2 == 0) throw "Error: Division by Zero";
        return num1 / num2;
    },
    x
};