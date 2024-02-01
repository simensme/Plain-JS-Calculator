const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumberValue = number => {
    // Replace the current display value if the first value has been entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If the current display value is 0, replace it, if not add a number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
};

// Function specific to adding a decimal
const addDecimal = () => {
    // If the operator is pressed, do not add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
};

// Function to use different operators
const useOperator = operator => {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentvalue', currentValue);
    }
    // Ready for the next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
    console.log('firstValue:', firstValue, 'operatorValue', operatorValue);
};

// Add Event Listeners for numbers, operators and decimal buttons
inputBtns.forEach(inputBtn => {
    // Numbers
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset display via clear button
const resetAll = () => {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
};

// Event listeners
clearBtn.addEventListener('click', resetAll);