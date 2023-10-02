function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression); 
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addDecimal() {
    var currentDisplay = document.getElementById('display').value;

    if (currentDisplay.indexOf('.') === -1) {
        document.getElementById('display').value += '.';
    }
}

function backspace() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculatePercentage() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression); 
        result = (result / 100).toFixed(2); 
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
