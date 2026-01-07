let total = 0;
let currValue = 0;
let operator;
const btns =  document.querySelectorAll(".calculator-button");
const displayInput = document.querySelector(".display-input");
const displayPrev = document.querySelector(".display-previous")
const topBtns = document.querySelectorAll(".calculator-button-top");
let opertators = ["+", "-", "/", "*", "="];
let q = [""];

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiple(a, b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
}

function operate(op, a, b) {
    Number(a);
    Number(b);

    if (op == "+") {
        total = add(a, b);
    }

    if (op == "-") {
        total = subtract(a, b);
    }

    if (op == "*") {
        total = multiple(a, b);
    }

    if (op == "/") {
        total = divide(a, b);
    }
}



function updateDisplay() {
    displayInput.textContent = currValue;
}

function updatePrevDisplay() {
    displayPrev.textContent = total + operator;
}

function clear(event) {
    if (event.target.textContent == "AC") {
        currValue = 0;
        updateDisplay();
    } else if (event.target.textContent == "CE") {
        if (currValue.length == 1) {
            currValue = 0;
            updateDisplay();
        } else {
            currValue = currValue.slice(0, -1);
            updateDisplay();
            console.log(currValue);
        }
    }
}


function handleButtonClick(event) {
    if (!opertators.includes(event.target.textContent)) {
        if (!String(currValue).includes(".")) {
            if (currValue == 0) {
                currValue = event.target.textContent;
                updateDisplay();
                console.log(event.target.textContent)
            } else {
                currValue += event.target.textContent;
                updateDisplay();
                console.log(event.target.textContent)
            }
        } else if (!(event.target.textContent == ".")) {
            currValue += event.target.textContent;
            updateDisplay();
        } 

        console.log(currValue);
    } else if (opertators.includes(event.target.textContent) && 
                event.target.textContent != "=") {
                    
        let tempCurrValue = Number(currValue);
        let tempTotal = Number(total);

        if (total != 0) {
            displayInput.innerHTML = 0;
            let tempOperator = operator;
            currValue = 0;
            operate(tempOperator, tempTotal, tempCurrValue);
            updateDisplay();
            updatePrevDisplay();
            console.log(total);
        } else {
            let tempOperator = event.target.textContent;
            total = tempCurrValue;
            currValue = 0;
            updateDisplay();
            displayPrev.textContent = total + tempOperator;
            console.log(total);
        }

        operator = event.target.textContent;
    } else if (opertators.includes(event.target.textContent) && 
                event.target.textContent == "="){

            let tempCurrValue = Number(currValue);
            let tempTotal = Number(total);
            let tempOperator = operator;
            currValue = 0;

            
            operate(tempOperator, tempTotal, tempCurrValue);
            displayInput.textContent = total;
            displayPrev.textContent = 0;
            console.log(total);
    }
    
}



btns.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
});

topBtns.forEach((topBtn) => {
    topBtn.addEventListener("click", clear)
})

