const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const sendNumberValue = number => {
    // If the current display value is 0, replace it, if not add a number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
};

// Add Event Listeners for numbers, operators and decimal buttons
inputBtns.forEach(inputBtn => {
    // Numbers
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
});