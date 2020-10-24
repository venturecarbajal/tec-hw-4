// Create all neccessary elements
var timerEl = document.querySelector('#time');
var startBtnEl = document.querySelector('#start-btn');
var mainContEl = document.querySelector('#main-container');
var quizContEl = document.querySelector('#quiz-container');
var highScoreLinkEl = document.querySelector('.scores');
var minutesDisplay = document.querySelector('#minutes');
var secondsDisplay = document.querySelector('#seconds');

// let highScores = [];
// //  Method to store and retrieve arrays in/from local storage obtained from https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
// if (JSON.parse(localStorage.getItem('scores')) !== null) {
//   highScores = JSON.parse(localStorage.getItem('scores'));
// }

// Quiz Questions function
function loadQuestions() {}

const questions = [
  {
    questionOne:
      'Question 1: Who is the infamous founder and ex-CEO of WeWork?',
    answers: [
      'Travis Kalanick',
      'Adam Neumann',
      'Elizabeth Holmes',
      'Peter Thiel',
    ],
    correctAnswer: 'Adam Neumann',
  },
  {
    questionTwo:
      'Question 2: What famed Silicon Valley consumer healthcare tech company raised over $1B, but ultimately shutdown due to fraudulent activity and misleading investors?',
    answers: ['23andMe', 'CVS Health', 'GoodRX', 'Theranos'],
    correctAnswer: 'Theranos',
  },
  {
    questionThree:
      'Question 3: What company created the investment vehicle known as the Vision Fund?',
    answers: ['Softbank Group', 'a16z', 'YCombinator', 'Amazon'],
    correctAnswer: 'Softbank Group',
  },
];

// Start Quiz function
function displayQuestion() {
  mainContEl.setAttribute('class', 'container d-none');
  let rowEl = document.createElement('div');
  rowEl.setAttribute('class', 'row');

  let colEl = document.createElement('div');

  colEl.setAttribute('class', 'col');

  rowEl.appendChild(colEl);

  let h3El = document.createElement('h3');
  h3El.textContent =
    'Question 1: Who is the infamous founder and ex-CEO of WeWork?';

  colEl.appendChild(h3El);

  quizContEl.appendChild(rowEl);

  let buttonEl = document.createElement('button');
  buttonEl.setAttribute('class', 'button');
  colEl.appendChild(buttonEl);
  buttonEl.textContent = 'Travis Kalanick';

  let pEl = null;
  quizContEl.setAttribute('class', 'container');
  let currentQuestion = 1;
  let score = 0;
}

startBtnEl.addEventListener('click', function () {
  console.log('Start btn works');
  setTime();
  displayQuestion();
});

// Timer function

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = 'time remaining: ' + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
