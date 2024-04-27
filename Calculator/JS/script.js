
function appendInput(value) {
    document.getElementById('input').value += value;
}

function clearEntry() {
    var input = document.getElementById('input').value;
    document.getElementById('input').value = input.slice(0, -1);
}

function allClear() {
    clearInput();
    // You can add additional logic here if needed
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    var input = document.getElementById('input').value;
    var result = eval(input);
    document.getElementById('input').value = result;
}