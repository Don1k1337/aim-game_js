const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeListBtn = document.querySelector('#time-list');
const timeLeft = document.querySelector('#time');
let time = 20;

// start button actions
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

// time choosing
timeListBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time', 10));
        screens[1].classList.add('up');
        startGame();
    }
})

// debug
startGame()

// start game logic
function setTime(timeValue) {
    timeLeft.innerHTML = `00:${timeValue}`
}

function startGame() {
    setInterval(decreaseTime, 1000)
    setTime(time)
}

function stopGame() {

}

function decreaseTime() {
    if (time === 0) {
        stopGame()
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
