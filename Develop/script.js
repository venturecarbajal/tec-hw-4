// Create all neccessary elements
var timerEl = document.querySelector('#time');
var startBtnEl = document.querySelector('#start-btn');
var mainContEl = document.querySelector('#main-container');
var quizContEl = document.querySelector('#quiz-container');
var highScoreLinkEl = document.querySelector('.scores');
var minutesDisplay = document.querySelector('#minutes');
var secondsDisplay = document.querySelector('#seconds');

var totalSeconds = 0;
var secondsElapsed = 0;

// Start Quiz function
function startQuiz() {
  startBtnEl.textContent = 'Start btn works';
}

startBtnEl.addEventListener('click', function (timerEl) {
  console.log('Start btn works');
});

// Timer function

function startTimer() {}
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
startBtnEl.addEventListener('click', startTimer);

window.onload = function () {
  var fiveMinutes = 60 * 3,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

// var timeRemaining = time;
// timerEl.setAttribute('value', timeRemaining);

// let myInterval = setInterval(function () {
//   if (timeRemaining < 1) {
//     clearInterval(myInterval);
//  When the final question is answered or the timer reaches zero, the quiz container is hidden and the score container is displayed, where the user enters their initials
// quizContainerEl.setAttribute("class","container d-none");
// finalContainerEl.setAttribute("class","container");
// return;
//   }
//   timeRemaining = timeRemaining - 1;
//   timerEl.setAttribute('value', timeRemaining);
// }, 1000);
