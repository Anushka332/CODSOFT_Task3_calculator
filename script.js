let displayValue = '';

function appendNumber(number) {
    if (displayValue === '0' && number === '0') return;
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    if (['+', '-', '*', '/'].includes(displayValue.slice(-1))) return;
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}
