// const calculatorKeys = Array.from(document.querySelectorAll('.calculator-keys'));
// const calculatorScreen = document.querySelector('.calculator-screen');


// console.log(calculatorKeys);

// calculatorKeys.map(button => {
//     button.addEventListener('click', (e) => {
//         switch (e.target.innerText) {
//             case 'AC':
//                 calculatorScreen.innerText = '';
//                 break;
//             case '=':
//                 try {
//                     calculatorScreen.innerText = eval(calculatorScreen.innerText);
//                 } catch {
//                     calculatorScreen.innerText = 'Error!';
//                 }
//                 break;
//             default:
//                 calculatorScreen.innerText += e.target.innerText;
//         }
//     });
// });


let calculatorScreen = document.getElementById('calculator-screen'); // where everything is displayed.
let calculatorKeys = Array.from(document.getElementsByClassName('calculator-keys')); // gett all buttons .
const rt = document.querySelector('.r-t');

// map thru the array, a new array with each element being the result of the callback function.
calculatorKeys.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {  // the click based on value of innerText
            case 'C':
                calculatorScreen.innerText = '';
                break;
            case '=':
                try {
                    calculatorScreen.innerText = eval(calculatorScreen.innerText); // evaluates string returns its completion value
                } catch {
                    calculatorScreen.innerText = "Error" // catch error if the user tries to calculate without any values.
                }
                break;
            case 'R.T':
                calculatorScreen.innerText = 'This is my first amazing calculator!';
                break;
            default:
                calculatorScreen.innerText += e.target.innerText; // default mode for our calculatorScreen
        }
    });
});