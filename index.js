
function appendChar(char) {
    document.getElementById('screen').value += char;
}
function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteChar() {
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = value.substr(0, value.length - 1);
}

function calculate() {
    var value = document.getElementById('screen').value;
    document.getElementById('screen').value = eval(value);
}