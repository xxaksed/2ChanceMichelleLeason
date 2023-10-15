const button = document.getElementById("start")
const timer = document.getElementById("time")
let time = 0
let timerInterval
let timerActive = false;

function toggleTimer() {
    timerActive = !timerActive
    if (timerActive == true) {
        button.innerText = "stop"
        startTimer()
    }
    else {
        button.innerText = "start"
        stopTimer()
    }
}

function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

const deb = debounce(toggleTimer, 1000)

function incrementTimer() {
    time++
    timer.innerText = time
}
function startTimer() {
    timerInterval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval)
}

button.onclick = function () {
    deb()
}

let colors = ["blue", "white", "red", "green", "gray", "aqua", "brown", "azure", "blueviolet"]

function getRandomColor(){
    let rand = Math.floor(Math.random() * colors.length)
    return colors[rand]
}
setInterval(setRandomButtonColor, 3000)

function setRandomButtonColor(){
    button.style.backgroundColor = getRandomColor()
}

