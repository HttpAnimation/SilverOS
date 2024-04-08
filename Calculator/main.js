<script>
function appendToDisplay(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculateResult() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (e) {
        document.calculator.display.value = 'Error';
    }
}
</script>
