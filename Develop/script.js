// Create all neccessary elements
var timerEl = document.querySelector('.timer');
var startBtnEl = document.querySelector('.start-btn');
var mainContEl = document.querySelector('.main-container');
var quizContEl = document.querySelector('.quiz-container');
var highScoreLinkEl = document.querySelector('.scores');

// Start Quiz function
function startQuiz() {
  startBtnEl.textContent = 'Start btn works';
}

startBtnEl.addEventListener('click', function (timerEl) {
  console.log('Start btn works');
});

// Timer function
function startTimer() {

};
