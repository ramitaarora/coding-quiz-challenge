var quizData = [
    {
        question: "Commonly used data types do NOT include:",
        answer: ["strings", "alerts", "booleans", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else state is enclosed with:",
        answer: ["curly brackets", "quotes", "parenthesis", "square brackets"],
        correctAnswer: "curly brackets"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answer: ["strings", "numbers", "other arrays", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Fill in the blank: string values must be enclosed with _____ when being assigned to variables.",
        answer: ["curly brackets", "commas","quotes", "parenthesis"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["console.log", "JavaScript", "terminal/bash", "for loops"],
        correctAnswer: "console.log"
    }
]

var startButton = document.querySelector("#start-button");
var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var selectAnswer = document.querySelector(".each-answer");
var right = document.querySelector(".right");
var wrong = document.querySelector(".wrong");
var viewScore = document.querySelector(".view-score");
var playAgain = document.querySelector(".play-again");
var playAgainButton = document.querySelector('#play-again-button');
var timer = document.querySelector(".timer");
var enterName = document.querySelector(".enter-name");
var nameInput = document.querySelector("#user-name");
var submitName = document.querySelector("#submit-name");
var saved = document.querySelector(".saved");

var totalScore = 0;
var questionNumber = 0;
var secondsLeft = 75;
var scoresArray = [];
var prevScores;
var highScore;

startButton.addEventListener('click', function(event) {
    event.preventDefault();
    startButton.setAttribute("class", "hidden");
    quizTimer();
    playQuiz();
})

function quizTimer() {
    var timerInterval = setInterval(function () {
        if (secondsLeft === 0 || questionNumber === quizData.length) {
            clearInterval(timerInterval);
            calculateScore();
        } else {
            secondsLeft--;
            timer.textContent = "Timer: " + secondsLeft;
        }
    }, 1000)
}

function playQuiz() {
    quiz.removeAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';

    if (questionNumber < quizData.length && secondsLeft > 0) {

        var eachQuestion = document.createElement("h2");
        eachQuestion.textContent = quizData[questionNumber].question;
        question.append(eachQuestion);

        for (var i=0; i < (quizData[questionNumber].answer).length; i++) {
            var eachAnswer = document.createElement("p");
            eachAnswer.setAttribute("class", "each-answer");
            eachAnswer.textContent = quizData[questionNumber].answer[i];
            answers.append(eachAnswer);
        }
    }
}

answers.addEventListener('click', function(event) {
    wrong.setAttribute("class", "hidden");
    right.setAttribute("class", "hidden");
    if (event.target.textContent === quizData[questionNumber].correctAnswer) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
})

function rightAnswer() {
    right.removeAttribute("class", "hidden");
    questionNumber += 1;
    playQuiz();
}

function wrongAnswer() {
    wrong.removeAttribute("class", "hidden");
    questionNumber += 1;
    secondsLeft -= 10;
    playQuiz();
}

playAgainButton.addEventListener('click', function (event) {
    event.preventDefault();
    questionNumber = 0;
    totalScore = 0;
    secondsLeft = 75;
    viewScore.innerHTML = '';
    nameInput.value = '';
    scoresArray = [];
    timer.textContent = "Timer: " + secondsLeft;

    enterName.setAttribute("class", "hidden");
    viewScore.setAttribute("class", "hidden");
    playAgain.setAttribute("class", "hidden");
    saved.setAttribute("class", "hidden");

    playQuiz();
    quizTimer();
})

function calculateScore() {
    wrong.setAttribute("class", "hidden");
    right.setAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';

    totalScore = secondsLeft;
    var displayScore = document.createElement("h2");
    displayScore.textContent = "Total score: " + totalScore;
    viewScore.append(displayScore);
    viewScore.removeAttribute("class", "hidden");

    saveHighScore();
}

function saveHighScore() {
    saved.setAttribute("class", "hidden");
    enterName.removeAttribute("class", "hidden");
    playAgain.removeAttribute("class", "hidden");
}

submitName.addEventListener('click', function(event) {
    event.preventDefault();

    oldScores = JSON.parse(localStorage.getItem("scores"));

    if (oldScores) {
        scoresArray = oldScores;
    }

    highScore = {name: nameInput.value, score: totalScore};
    
    scoresArray.push(highScore);
    localStorage.setItem("scores", JSON.stringify(scoresArray));

    saved.removeAttribute("class", "hidden");
    enterName.setAttribute("class", "hidden");
})