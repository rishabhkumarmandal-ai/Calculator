let display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    display.value += operator;
}

// Function to append decimal point
function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendDot();
    }
});
