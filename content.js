document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('inputField');
    var clearButton = document.getElementById('clearButton');
    var lastCharRadio = document.getElementById('lastChar');
    var entireStringRadio = document.getElementById('entireString');
    
    document.addEventListener('keydown', function(event) {
        
        var keyPressed = event.key;

        if (entireStringRadio.checked) {
            
            if (keyPressed === ' ') {
                inputField.value += ' ';
            } else if (keyPressed === 'Backspace') {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value += keyPressed;
            }
        } else {
    
            if (keyPressed === ' ') {
                inputField.value += ' ';
            } else if (keyPressed === 'Backspace') {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value = keyPressed;
            }
        }

        event.preventDefault(); 
    });

    clearButton.addEventListener('click', function() {
        
        inputField.value = '';
    });

    
});