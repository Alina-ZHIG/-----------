let display = document.getElementById("display");
let currentValue = '';
let operator = '';
let previousValue = '';

function inputValue(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        previousValue = currentValue;
        currentValue = '';
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    updateDisplay();
}

function switchSign() {
    currentValue = String(-parseFloat(currentValue));
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue || previousValue || '0';
}

function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);

    if (operator === '+') {
        result = prev + curr;
    } else if (operator === '-') {
        result = prev - curr;
    } else if (operator === '*') {
        result = prev * curr;
    } else if (operator === '/') {
        result = prev / curr;
    }

    currentValue = String(result);
    operator = '';
    previousValue = '';
    updateDisplay();
}
