let preValue = "";
let currentValue = "";
let operatorValue = "";
let flag = 0;
let firstperValue=0;
//functuion enter value to screen
function keyPress(keyValue) {
    const screen = document.getElementById("screen");

    if (flag === 1) {
        screen.value = keyValue; // Start fresh
        flag = 0; // Reset flag
    } else {
        screen.value += keyValue;
    }
}

//function hold events when an operator key pressed

function operatorClicked(operator) {
    const screen = document.getElementById("screen");
    firstperValue=document.getElementById("screen").value;
    
    if (preValue === "") {
        preValue = screen.value;
        operatorValue = operator;
        screen.value = "";
    } else {
        currentValue = screen.value;
        calculateResult();
        operatorValue = operator;
       
    }
}
//indirect function  calculate  result  when operator function runs
function calculateResult() {
    currentValue = document.getElementById("screen").value;

    let converter = `${preValue}${operatorValue}${currentValue}`;
    try {
        preValue = eval(converter);
        document.getElementById("screen").value = preValue;
        currentValue = "";
        flag = 1;
    } catch (e) {
        document.getElementById("screen").value = "Error";
        resetCalculator();
    }
}
//function used to clear variables 
function resetCalculator() {
    preValue = "";
    currentValue = "";
    operatorValue = "";
    flag = 0;
}

//function used to trigger calculationResult function when =keypressed
function equals() {
    calculateResult();
    operatorValue = "";
}

//screen clearing function
function clearScreen() {
    document.getElementById("screen").value = "";
    resetCalculator();
}
//function to calculate square
function calculateSquare(){
     document.getElementById("screen").value *= document.getElementById("screen").value;

}
//calculate cube of screen value
function calculateCube(){
   document.getElementById("screen").value = document.getElementById("screen").value ** 3

}
//function to calculculate percentage
function calculatePercentage(){
let percentageValue=document.getElementById("screen").value;
document.getElementById("screen").value=(firstperValue*percentageValue)/100;

    

}
//keyboard integration part
document.addEventListener('keydown', (event) => {
    const key = event.key;

    
    if ('0123456789'.includes(key)) {
        keyPress(key);
    }

   
    if ('+-*/'.includes(key)) {
        operatorClicked(key);
    }

   
    if (key === 'Enter' || key === '=') {
        equals();
    }

    
    if (key === 'Backspace') {
        const screen = document.getElementById("screen");
        screen.value = screen.value.slice(0, -1);
    }

    
    if (key === 'c' || key === 'C') {
        clearScreen();
    }

    
    if (key === '.') {
        keyPress(key);
    }
});