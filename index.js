// an object to store the data of our calculator
const calculator = {
	displayValue: '0',
	firstOperand: null,
	awaitSecondOperand: false,
	operator: null
};

// a function that handles the digits input by the user for display
// and arithmetic operations
function inputDigit(digit) {
	const { displayValue, awaitSecondOperand } = calculator;

	if (awaitSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.awaitSecondOperand = false;
	} else {
		// if screen value is '0', render typed value, otherwise append to current screen value
		calculator.displayValue =
			displayValue === '0' ? digit : displayValue + digit;
	}
}

// a function that handles the input of operators in relation to given operands
function handleOperator(nextOperator) {
	const { firstOperand, displayValue, operator } = calculator;
	const inputValue = parseInt(displayValue);

	if (operator && calculator.waitingForSecondOperand) {
		calculator.operator = nextOperator;
		return;
	}

	if (firstOperand === null) {
		calculator.firstOperand = inputValue;
	} else if (operator) {
		const currentValue = firstOperand || 0;
		const result = performCalculation[operator](currentValue, inputValue);

		calculator.displayValue = String(result);
		calculator.firstOperand = result;
	}

	calculator.awaitSecondOperand = true;
	calculator.operator = nextOperator;
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
keys.addEventListener('click', event => {
	// object destructuring; extract the target property from the even object
	const { target } = event;
	if (!target.matches('button')) {
		return;
	}
	if (target.classList.contains('operator')) {
		handleOperator(target.value);
		updateDisplay();
		return;
	}
	if (target.classList.contains('all-clear')) {
		console.log('clear', target.value);
		return;
	}

	inputDigit(target.value);
	updateDisplay();
});
