function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const input = display.value.trim(); // Remove leading/trailing spaces

    if (input === '') {
        alert("Enter some input");
        display.value = ''; // Clear display if no input
        return;
    }

    try {
        let result = eval(input);
        if (result === Infinity || result === -Infinity) {
            alert("Division by 0");
            display.value = ''; // Clear display on division by 0
        } else {
            display.value = result; // Show result if it's valid
        }
    } catch (error) {
        alert("Invalid input");
        display.value = ''; // Clear display on invalid input
    }
}
