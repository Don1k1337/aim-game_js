const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeListBtn = document.querySelector('#time-list');
const timeLeft = document.querySelector('#time');
const board = document.querySelector('#board');
const timeEnd = document.querySelector('.time-end')
let time = 0;
let score = 0;

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

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        randomCircleGenerator()
    }
})

// start game logic
function setTime(timeValue) {
    timeLeft.innerHTML = `00:${timeValue}`;
}

function startGame() {
    setInterval(decreaseTime, 1000);
    randomCircleGenerator();
    setTime(time);
}

function stopGame() {
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
    timeLeft.parentNode.classList.add('hide');
    timeEnd.style.display = 'block'

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

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomCircleGenerator() {
    const circle = document.createElement('div');
    const size = getRandomSize(10, 30);
    const { width, height } = board.getBoundingClientRect()
    const positionX = getRandomSize(0, width - size);
    const positionY = getRandomSize(0, height - size);
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${positionY}px`
    circle.style.left = `${positionX}px`
    board.append(circle)
}
