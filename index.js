// an object to store the data of our calculator
const calculator = {
    displayValue: '0',
    firstOperand: null,
    awaitSecondOperand: false,
    operator: null
}

// a function that handles digits to be output in the display screen
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

// initial call to the display function
updateDisplay();

// adds event listener to handle key press operations
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // object destructuring; extract the target property from the even object
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});
