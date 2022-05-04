var currentNumberWraper = document.getElementById("currentNumber");
var currentNumber = 0; 

if(currentNumber < 0) {
    currentNumberWraper.style.color = 'red';
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWraper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWraper.innerHTML = currentNumber;
}


