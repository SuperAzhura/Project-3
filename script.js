function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "cannot divide by zero";
    }
}

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    var result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById('result').innerText = "Result: " + result;
}

function setOperation(operation) {
    // Implement this function to set the operation
    // For example, you can store the operation in a variable
    // or update the display to show the selected operation
}

// Use a variable to store the expression
let expression = '';

function appendToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const regex = /(\d+(\.\d+)?)\s*([\+\-\*\/])\s*(\d+(\.\d+)?)/;
        const match = expression.match(regex);

        if (match) {
            const num1 = parseFloat(match[1]);
            const operator = match[3];
            const num2 = parseFloat(match[4]);
            let result;

            switch (operator) {
                case '+':
                    result = add(num1, num2);
                    break;
                case '-':
                    result = subtract(num1, num2);
                    break;
                case '*':
                    result = multiply(num1, num2);
                    break;
                case '/':
                    result = divide(num1, num2);
                    break;
                default:
                    result = "Invalid operation";
            }

            document.getElementById('display').value = result;
            expression = result.toString(); // Store the result for further calculations
        } else {
            throw new Error('Invalid expression');
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
