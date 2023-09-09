let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    let currentDisplay = display.value;
    if (currentDisplay.length > 0) {
        display.value = currentDisplay.slice(0, -1);
    }
}