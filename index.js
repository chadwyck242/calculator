const calculator = {
    displayValue: '0',
    firstOperand: null,
    awaitSecondOperand: false,
    operator: null
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();