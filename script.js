let display = document.getElementById('display');
console.log(display);


        function appendNumber(number) {
            display.value += number;
        }

        function appendOperator(operator) {
            display.value += ' ' + operator + ' ';
        }
     
        function clearDisplay() {
            display.value = '';
            
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
               
            } catch (e) {
                display.value = '';
                result.innerHTML = 'Error'
            }
        }

        function slice() {
            display.value = display.value.slice(0,-1);
        }
        